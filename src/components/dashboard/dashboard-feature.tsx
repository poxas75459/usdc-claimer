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
    "3eBc2ZfokK7Xju3nTkwGQVuGoM1qtA5v661qsbkqtXEHuhv8pv4G3oviRARcBv2ZyRhjKg6t82cAHiUprtP7Gf2B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V2wnNQvVNNn81oCj62C6BrqqRrMfS62VeS6Ki4eVsmp29wECFSomE7CSUzJjXt7vhKy2tEjrmtqrJJ7U2xhaVQ",
  "key1": "5KVhKrTpdzSerhcTwf7b6zYCBoy1aA2RBEQm3apsqWCvfoZNsUxXCNxy2CsN2V99DB1Cuau6MNsG5YoQes356hT5",
  "key2": "27uyxohjUrbXBZVCuDP2UJqHaWf3b1Ldwmk8oeZ23tA6VmfYfkvoBuMFWQHM8rAZstuLEpmCpAhDCQJ3z9Hs9oh8",
  "key3": "494d9e1BXCtQTnh9haqLUnBizqKVroc2fKj7kc4EUrPMGyFQdxf6mcApQXnfemqsiUsy7rtEoFNtvTpyLKoaLrxS",
  "key4": "nShQg3vVSYjbGXgweSmcHakGfTXD3Yx3ix9R8jwLWkqGPm4gABbwZdbh3s1EF7yjad36wJeV6WQGxbB2zjsWDA4",
  "key5": "42exaKqf4tYxagzXif7B1kbvbgqp6Gz7ndZ15AK2wBd13vUJ37BBpsYFuQADABShmLd6Vu92aTgtk3LZWL1dgNpZ",
  "key6": "3S8QZbM3AzUJhFcmhF8mUgqi8QBbEGofKbxqdvybSQT15ntanFa45cz6Nfx8yEFiuDzjLXUsZY46UWBBWwPBYtb2",
  "key7": "4w8EDoe5tZW46Qw3Qj562nFx5UjbJUuHNN4BQuPsRjKWXeNebJipAxTxLpurt8dNoN2WXqPCpcXbjE9MiRADA9S",
  "key8": "2uJLDVwvtqkDBMqKbetTXTcLvy17zs1HHydA3YyDuyYCBB4PPgPCoLTiV2kprRrVVSe6PLkmNVmvwx2xxasKvsc1",
  "key9": "3AAoWUSg6yPMKjMmryAbFRkVy3UYytztJAXGaNaY7nQdS9hmkf8GzPtUv6KyJ6SzUgqJbHhcmFQvJHHdegvq4HZm",
  "key10": "2dmQmhdVzqBkT4L13RitdE28sN3b6qyzX14G2AH68rU9r1hrA8qXWYhyKJ2q1Agp6pYLZZJvf4HYDWEoVdzXWHet",
  "key11": "AfbcNkLMnrgojXKTaLDniahCN3RPQWgWLh17ZSVQYjSkEJyGNvQGWJCCYmw3iFkw6wriCepk2m3FGV29kxQNP5P",
  "key12": "5Zuj9Uu9nmeaPqnRyFrCneYtfYPv2z9cCT2wytW474zfQ1Lehv9vfV64vCBHaCo5Rny9hqoYnVMQJaiXhTPebquk",
  "key13": "jcv4gUtvgQW4oBg4opvLY3JSUEiwbRNyKmCQPcJbd6w6rg7gQbn8yQpqjNbe38fJJJqANaAzrjwjtgXT32af5Do",
  "key14": "5W7n5VbroEZZJeGXwTAApopXjTAwKbmz2jYSwcgx6paE9muNz75cTvEr43Nt4edZp7QWC1J8Gy56pr4LS9YXoGj6",
  "key15": "3FFoaNUNmDhWskgrpUHiPiro3w7Gn7CgKhf2JCJ5F3xLnqZ4Fk8AV6KhnCU9NGYSTxDzeARnSHg3t9b8xrXDGt3T",
  "key16": "4ndRDz6WYK68ZrZp855q9V6MS6DXqL6ReYNkJjSRynGnTixaZwKe9Dz7ns6e25EMTXWXew7PBReiuWHHxxHjdsD1",
  "key17": "3ZHpsC3mvM5BAd2J9M42hBS452AsoAerLAQYSJz4psKbynbvqCCi4aexSQ2wgrSy7nTt2Qkx8vLh8ZBwL9PgEsMr",
  "key18": "4zCE6ei5RXqzpmjnWVrUn4p7VKwc5Nt3VD7kATB6Wm6aYK3AiDVZgsQBJWFHQk7oxJcLF3Sv6dhz53UYLEYfFaWu",
  "key19": "4pA3SNXN31KvmXEMR9uaUNqiorHJqKRae4WUtnrWS5Nhe7WNXy4B3VYtx8NNra67BKMogjGiNb8wogmcBxirtSNA",
  "key20": "39m33wGC1bxKSEpeQ9A39wZzZufnUWKW99C6jzTZWLQhNxwpNyR39MootpzoNoE1qRQYuFQ6VEPNtC6fY3QUZn36",
  "key21": "4ewZW56Vv1HqSGaqZ1qdyr9CKYoPmZStbRSiup8zEmsvapi77J8eV7rfLGvnDfaw3mpwkuEdmXR68qx8zcPMwGAF",
  "key22": "5wRDdsz1MVnK9q9p3PumFqrb5EFNtvwhzyqkv49GCcfUk3uEe7WRnpk1kDYA43LuuviEdRhhwB2E9qhhncP99BXK",
  "key23": "3WXrKVnL4sB3p416UEjGBA9kUo632owjGoQYc7tWUyPWYTAmjKR2Eukdvzh1Zsp5L1pXaxQiVK2LadeiWaHDTmbS",
  "key24": "3BUrJRFH1GHD3T2Uii7Y3ZTBUwFNZc1DNW5ZSzQv6F4ce7it21pQt6qSuU9KKyUKV36Q7LSdBK5fmqSwP6KKgV3c",
  "key25": "2LWtUYsj2K8QrxPqTjBR1hCkgqw8426NHa1a971sHErRpi4Pdymi2qAbDQDRMDsPULDDstYvuxMkYj5Dprde7Ay4",
  "key26": "4QLLsMcy3bdgS2bhgeNcr6miFfYxSzJPAkJ5dy32ALdS7fdcB9ad7id1iFaxH2PQrzgZw9fco21UvQHkjawfPskj",
  "key27": "mq5nXBocvfk7un3TZQqpxoJF8ZgjhPActX5kNPc6eRVsLu81Yj2Np1My9cchB4yw6fSu4a2HUGnUUcPZPN9CHd8",
  "key28": "2QHyxp7uBPQDUYskVhpLZ5BaDs3Tts1VGYF638BdyrZFYNqhhXDHcr6ENNZENrnWfijS1Y45Q3eoUYH1dMmVq5Bh",
  "key29": "4VC17UU7hFMEi4jmJaKRKfWHa74YL3hELjoMGwAXEHuFzaxns6JAd76xrhMj37Q2vbNx42PyNkqFfTEvTJgjTwzf",
  "key30": "3bAWbpJWmFeBq8rkMPVNuBbG94jkQKWcSmMZvm2xqgLjsm9smi9SXA6i3hAzqdZAo6GxP5bJ7KV8ykdFUX5oXbSD",
  "key31": "4thA37yCwbu5mdBbkdFEmWjrE3817pt775ZASW2MH2ckwpyhYdKmJwadqKigHkJcGfP8xEPStAqN3215DBH9UrfN",
  "key32": "2nL7cvziQnMMgJDV7gSTpnyhc3M3hup9mgd84UxxFf8vtFJ6YWoumJp2YWhwQk7MCKkBPHMBBRXyJGvo3ypPHrqB",
  "key33": "3bHbgeeV7JADP9MeY49VnNELh1oFkFEqKmHdz5pdqP6rt3VWC2Kn3f8Djvcjfkby93SVhdHJuPHhWNLpJcyRQicJ",
  "key34": "5Gip3J5DWLdyfwo33n8Pqdz1ForqasWt7XsdYzPqyoRePUC2ZcxpTiZZm3V9Z1XChTzP5GjCiShwCa3s1W6T1VE1",
  "key35": "3TAezUL5Ccpi8oxT2o24CWp82BnhUyfqFvXhCsakWUF1yhozrCAAST7kHordwcWDx3kXMx1kFCfaM6ovyuVxGHUi"
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
