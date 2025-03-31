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
    "2wZUQ4n2N59TDFC6V6xQzudc7VedqN3dZ2rqCDdpFbM8K3pgeEMuDnz15KfM6vNgdmuhDB6trCwESHtGKvwRBSZp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PMes6jyji5biggxFjmYVorzw6eJ4dd1sWHra2CTZVsz27oQY72ee4g6C3L78GzjHDRzMpAN5Wb6HyhsEEd115tD",
  "key1": "3Yd4tYJyWrbHThuUGpk5WrVLua62Yu5TJLGLFQoQGERXmKtC3ZWNSJDcYJEgo3HYedGnhDASQPCwRnG4senuW18V",
  "key2": "5DDdugBdWtfayvTBA4K3BCcAYVWJrypYB22c22EonS4NDSPjQMzoBMJrbZDrpLLTHXQPsXRa9GJxsykinpxyZdZt",
  "key3": "3sxFDUoijFXwStTqq5xRnF88zpf4iGna6eEbGJ6AATBn2SNXYZhxybRiWSZUerC5KhRs5jiLQ6bQ3zha4gFWz3Tb",
  "key4": "2wsEQbqhVMAM6H62ptdiL1c6vajQ9CPnpbTVXMSvvApA6thJDyPbyMG2zQTZGHMcv3NrmaMNkMV6L5pntdzo64rh",
  "key5": "2LWrprds4iwRUdeabTKBzZ74wVFRfNXxWSDqtEiVvmTY3A1Ahv3ymsnE5Gk2Vt3K8tK7qfcYJDGLPKNMv1iUKbkL",
  "key6": "4rB9bVWi1ZzsXjJNC8xcX56uXts5gwtHkwtMTHKPsXT3Zfhcez8f88rh2ZUp6XkH8EJTo5nrkbWCmUZ8FJy8QTRG",
  "key7": "51CMWChCDXjkwHTNJehSD4hVZfd3ktXwGuY5fEZkBSY6RHEuS1sJHYdqwweoQXf5ThhBXmYqmi2xQcepm8Z17Qhk",
  "key8": "4D3rNP7faCLcJozWgmNYGuYyhdDMxDuuu3tnJYjoDLCnibaNGoNZ17Bd9kU3d78j6P72SkSJDSMKnXrFZ5uQoUoN",
  "key9": "2doe4k3DRGBkEyhP4RJHLnVkqiSxM1JwEMbnT9swUKVLqSEsPzGEi2aZHWayaaKexACGzLUZNcdMDPrCSjyREmVH",
  "key10": "CbvsuqHViipT2rntzW2fb3xhXKtq9qFz32wjjMLTZWJi3QSTYa2wjNfZGspMXjpVBBEZ4jK9HstkMB9eRhx7MQg",
  "key11": "4xdTmB8AxMns8QJPkg4oaDfP4nFfCYkPr6r9M2CzY8xL6n6YwZTjPRgs8C6Bv7nTgFxJpotxtVaniedPVpnff78t",
  "key12": "2K61aEre9KqEtf9jFcbsXFMtfGVZV6FoMihgqyDy7FDervnAgbmigDF7VPvjhDFxw7hou11Lx4bayEFiVVg4AsuF",
  "key13": "3fi174WhvV4G9SQh1znLbuMrTArGMCkoyBK9ZTTgFgg8jpzHbSef1qAfyDUQzeJWqrvqzqUWgU8iCykB7vtR2pQ4",
  "key14": "XU17AsFNmsbqr2E78hgby4dUobsjzeHNE2RYCQjJfjqigcpPpLjCiJDhK1PQ7oUeZApH4BA3p59o3o6GfSXTFFD",
  "key15": "2vLXjRa7k8rmoJk2wp4JHv532spnN11bxbYMk7NMKxeURE34tkzxMP3rjKTJ6E8SFEEha1rivqdVzGi3fDC2GG7U",
  "key16": "wF9WKhfY7M561Dxhfw4vvywPYP1Z6VVucdDh4JZ5ZtPgv35kvCGoF8ZixdfFFAxP4bZGmo4G8eH73wPXGuzMjqx",
  "key17": "3toGFEhageMFmnXz5HkBBm9qXTLGdqrvsrKs1RrohQza3FNzZXk8tA2Huz6oNj92k7kVGQL7THLjF8Rw9YwtCDLy",
  "key18": "3nudR4T92UUNc5T4sh3WNrrqt6Zi9Nuz8VfeaZLXVT7Xcz397AbJwuz1k5Sb8srSdXKdUXDPHH2Ssmj9L2MDoWWJ",
  "key19": "pygajLjEfnx6Gzcfsd1ZnDUbTgZr7kde6NjhxfodQCs9jmu2gfhgXuzpkCGcT7wC15XYRLL5hcoG5XqE2Cizjp1",
  "key20": "Uk41Lup4RUow83HYvXBEhmXLqb7YBPxFvV1FwvhUP7VxGrMStS4VrJT6yLdjEVkCaZsxwd5F7HQiSNkkSAnzGnu",
  "key21": "RJGcmv1Pytc86k8izwUzmWjSogZtrHv3k9Dh3rUsaMvQoDe5p7gmA6Xeko5quf44Qj1ErdtzZ8YmybBz5qwctJx",
  "key22": "4Cd1qMJcnySbWJZopoB1BEdZgRwtD7cDJLtzHJNAESQ7GbJicBXHR4xdmhhRrjeRR3NMhS3EvGNrXv3x6CxycWXu",
  "key23": "36giejDRmo4RYVA2xxsquVc2rusCZDbaoAKADe1anckSAuartPkbY73iWTxvePoJPaQm3tJmjkzA16vfGNfnATj1",
  "key24": "591mScP9d8rZuPbD7FUSDoZErCUZ1xZzU7G2FCLdmZ3stBhtDsDgihwdo5udruYEkxXPHx6NiDvwMW3nJ5TRkXpz",
  "key25": "xWwdboo6S7wewuCT3jFWr9nJWGMLXaXtm5yHoP4Ed7cEiWjS8a4bf2JAPjnnHmHkYU6jeNzNokUKbFfMHzBBUd6",
  "key26": "3iGwXqEzTM5T7JN8JV2tbvA23XWSiDJ1U2BmFrdar6onqtWh81dhTPufwj9P5txnTkx6DazzseDD3yrKAyXBLMGU"
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
