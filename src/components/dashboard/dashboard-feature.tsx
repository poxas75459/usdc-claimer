/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "fmJQgpFfE9BB3hdmHM34JQ7aDU8iCs9wt5iwHReyhNQJtAB7FBUzDo5EbVGeWkXRnDGdc9jTC6uCFwXrEqwBCeW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QWfi2cuxb57bB26PjPcxPhJLDBEECbGh9ewdQT4RPo8XSJkZbQ5Q85qZuYu6wV2ikYRqDZwHZV14SJ9nihsBsap",
  "key1": "2EdHBZtHLCu4BYZWc3QUWRLucfSCvqfWtLgLiKmbmutocRrzegDPCNaWbb45UcoSsrNQEpsih3MWwK7L1N1NMRd3",
  "key2": "39iD8areU3oqhetfzVREsyyUKZRQVPckzEgkPUTkVHWztv89N284sJB3PgU458kqwLm8rJmURSrz7Px71gT258xX",
  "key3": "63kFb9CJc7D4Vj7aDBap6hqd5vcvT3rmRHtK8VssGSyGVeeoU7ByBitXzxJ2A792VHSaZhtvB1bzgDm6ohuP1y8L",
  "key4": "RuAFcgF2QunhhssBcAh4LdF738AwoTDgz1VrYJnVFSCHVpvFc44PyUxNxpPXyxyGC1Uv3PfCbxCo9rLCCkEntDJ",
  "key5": "yqLHDUFqU4gKURe4E2qpRYEWTHupMyM2QtUyuayaauquPf4F9suYdjAjUEBnN9cxduvQdJdQRsVifCFKnAJXEoi",
  "key6": "4hyP2daFn6GWy6dYWYjQbRo7C9HnWZwfVBbFuZtnLpMZG7Tdcj6bUyGy7jK6q5BKQtvjSwCh4k4kBeqQicKmzk5h",
  "key7": "4HTPPv8DCRPT6hmLQncfoWFomQRqpcMipeWKCUha7j5aMBjR2kRdbpp1rzDKGCioHsfxw7NJPn9joRnCyAdNaqbq",
  "key8": "JLXeQcL5WttMo8fmMdX11YxgQZ9DFu6pSDeu357Pkn2DuhATHMX7WbmSMVxEY9JdLuwrJnJ1C6zYUkv5KGGweHu",
  "key9": "YQds2wUp6mANfuRACjqujSeFTFL5vfdQRXhYhMcyLzvfyuMvrDQqR2pCsQvG2NPBiFx8GkWdszc7ATvwpd5w2yw",
  "key10": "4UPJZeMGpBYa1C7TD4JrqPHsdAUM3cPxLpYp7xQAFjhUxMq8RoFcvsZsumHa8Kh4aG6YS8aB5PMH9QbCskPuSYEj",
  "key11": "2ogohoghVeeRoyzSnT74bBaU56b7M5axjC4oJ6mGns4TosYZjWcyg1dWoVKov4mUvZ8PZ2efJ27J7GeM4pLc3v9F",
  "key12": "pRE8PetMXQQrJfVeQHjBE7afjmHBz6Ynyw84SKVTVR11C7KZAjVyU1qohSg33RXcD9jrZg1moywYbX6e1Cvmdd7",
  "key13": "2fxfQx9uVZzL5uXjRykJ3381ueMNoW7uGQU1UaShgiduGdZt1uq5a2rUY8C5HhQRnWmpQmaw4guvazKEqgb5J1mP",
  "key14": "yhrACEWBWzRdqNUfGcyzP7PhRpzevZFA7J7DnvRFM2cWoAGG9k8QhXWBs94gWHZ6itvhpk7CK98kiyn5FMhLHZy",
  "key15": "4H2dzFZaEMkA2h5BJkxuGKooTsxZxM3u4U9GkffmfBjwqzneuzte2gmfpz1phzyULVZuBmEU8kt5Doyy3BpQPBBj",
  "key16": "3tAbGJRp82gUEgcV4ZqhZvufzvbNPaK815nR46REJFdrBWHeE8SYWYHi52JgZpHW9KpswxRX87Af96SRy9vW4VN5",
  "key17": "22JAzCj7aPXqsGqqMN2G3omxH68mqHpFwX4K7d1u4STvMwmFWDo2PctuKoN2CcDQfA51X5VHTdsk4LHCmfRHZX12",
  "key18": "3YNvGpU9WtonUpMGgmi4Rr33jcGUEXCGJ2JMs8VA3r7h9Wg1DyiBt15Y3ahZTuYusg53UQZC6CWSTmKixJAcKnXh",
  "key19": "aM2JWcVckjtphw5Ps1PGvDvbavpgqKPaBLchEE9Aak9MrpTcewYHkjfDYnfWNCbNXaRs8ja8tdZAz7jRCprn5nb",
  "key20": "3Fmto6r4vQq5XY2jAE4yJXc9rGL7YNzFFG1wYPCPJ2bUFHn13taFokiWcktp15Y5w1LPcwP7rdhsSEn9jbDtSLm3",
  "key21": "MdG9Kh1s97FMC2eYH45eG2nLP1r1UWeW8hrV5XdTHxMFVZRjNfVJaiQ1q2GzEbx3Gg8FJiAuogTUWFSrbxmu2N2",
  "key22": "5ueWjAEib3rDR2jkkakymTxCTkKG4YjY9Wd9QFcAP26VEuFdPdz8AUoFHLHgtBVSFfoU7iUM9Rz2JRp6xp5bqS47",
  "key23": "3uta8vBbEDV5pV5n3L6mAZNfei6gmYDPw8bNhErybjNv318tAfjK4t4vvCvhxf72zhxCqCQ2PvX4aXLkaetp68nY",
  "key24": "2uwYniHKDHAQgCo3NdYFiMrW5KobaCm4z1FXFLnzb1GxMbceZb83qhTFrTJhsA771h8kScTkkEqtTYeHnXTdLFkY",
  "key25": "5qXvzaET9gT4MaGBnVeyXLJWicLXzUjnKDvgfiHjJXLjoaCgQJJNeWRufAvph362Yfy44kZHRpJWCGxyzeJAUkuj",
  "key26": "9zKCZcPgFpFCVRSvk3zz9ZY36Qr4zCTGKy2GUq4doEPcAykbt2SJMpnqrvKkVaDLqyqCHPkBbHqDx2ZaDoUW8pd",
  "key27": "2NUR2NNmFKKwA28tz1619zBmWVBJ2kLUpHhHyDfyAcPSCNs6NX2DeLuu7pztaQxupLRzzhCrEYiXDBhNcjVXDiDu",
  "key28": "3V6VeGmugdszQkjennvHVYZpCuR85faTDLoGgNSTcZhjn9JigPuWANfECCrjv2EBUBG51nPMqUnDSQ8gSCRSwVGZ",
  "key29": "35MGJnY6vJJsWJG5oQ5p6vgLhsQ5T3eizvWXKiVhRKC92YFsirfN5vcSgkqEGLHbRTgULfcPAdQn3zDKNogrZBU6",
  "key30": "5shjxW7T8yL4JQ5HCrNWQe6cyCJXRZXp4eDcEWgmxFfhtVLAwqyQyaez1pGwcyMbduexremVk6v2bXnJkH2N1PGi",
  "key31": "2AYANd7d9G425JVbu7FVmUgFoYzvJU6hH7CBaheLzYom3qPiEsikGN5ibaun2zArSmScjckQtQFX2XtqhfTxpgHX",
  "key32": "2nWvXUbMYW3tdmNgmHA3aFcbCSp56Nwht1ajV6bHd9YA39dp9TS44VKaQBAyUB3qTH7PDwPdV6dYuEjfxjCkud8w",
  "key33": "5Edm9xrSyLGkv6dog1KCEk2tKzyZHezizdUuynY8haUZmPJdWXuRUXMofQvcoXM2uioMfBJ2SuTUVpuwWApErptS",
  "key34": "4XiMNSiTTYtiL6mVpJjZrdwanQZAkkp6Sc8C4PwNUAtdfQzUtyV6RMDn8z6pWapoNMj6diK59dSKKi9D6fbg6UQo",
  "key35": "4UbgfiQZLuRJA4oqXsq6iqFoRz6AmZB3RReQ7kMDQY4NyiP7M5whDFognVPhw412bnce9icEXARAGAdvuNgUj4h9"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
