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
    "5FWMNmzPZAFPSmekxPYKfKEaGjeakUbhcUjk5BhzWms6TjKEXwmZGqZqex82Mj3TcPDT6qMZzhbi1dJiQN7au8Xr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "U2LgHA2NcbhLf99T7UqF6Tg78wJKY6FB7Z4vtXPrBAwtYEKDc6ZoxrR7J74yxJwjr44Xp9a5t64nDbG12dajjaC",
  "key1": "5iBGnN1mRmeCDcL3FuWK9MLcj7ECWNRgU9NRbg6gur9BfsLfgtR78L13tN2rXFGRdLmXUPbs4GUfp56hWZATKpsm",
  "key2": "iwvRBoYJHTa6y7ZTtDAByfrMq118X4rbTzKpUkCnFhRyAJTiFrGUZj5hxK3gnSk4eu53tAWy9DpBv5ATNMTNy8X",
  "key3": "3XSBi1jwUz4HocRFYMfKs2WsLnRbv7iXRxujWBExNdbZU7Mzfco6DKsQDqHR3EUxWESbfFCnHqLQHkBREFnHakj",
  "key4": "5fMQMNGA21TD3CVqEGRCHRw8VJg8jxj6vhB9ptsxMWpRHvA93MWRU1PDNq7mpULzihUkv11gwm5B4nXoZv5qYVnQ",
  "key5": "2ChrnW5sRqM4zVouv8M1dkK2EY9a7LXhHUkEiEGmdvFbJHFz68DsJhT8fjzMybBuTismGLogEYeTMdFrFeDQrrPF",
  "key6": "4BnZ1uenNfAMS55nFWxd2vQkbVzac6sxPgcntSVTZi5F5VVWNzj1GQWgH44VGMzf2uPTbJLubFSSdKWKdgugZRhg",
  "key7": "jsP5hwZggaTKYr9Ebn26vqi2FLRUqCR9f5MJBNEmkyxzWpxavQHKbEsrbqrV4QpyjXNkMUUsqwoGHFGMFKpAxmu",
  "key8": "4edW4nVwchj91JD6mFjbeZrsBpFoQBy3CfLHLbjdCJRLidxQEzvKbvmftbwRpFDZ3857zsZLnSYz9NixPMRbwU4j",
  "key9": "44mXjaPXD3rkGACFL4cnJEFvGNHQfwDtGgu5NfwXvnQr7iqmBCu8sDvNV51emdbKVke1tDs3h4Fy4QG77Qubt1YJ",
  "key10": "5JKropm32Bommd1Setgw7dj6tiaxh43N1eefDvcxBdxg9pVdrUXxe3f85Q48tmFqMZFhZPiy2yGg2yKFtdv5gN98",
  "key11": "5kAqnVHgPwh4Lg5swCYRvTvgr5gokLCRKTALFqZaSH16K5h9dHUDRhaP5hEQWfpwQiUxvXcMMfYUzADxjuBr9WM4",
  "key12": "4adeW1m3giC7kfhpDEDVFL1Ec8QUNKfmiKg9tNRiWmSo4BWF2NhLC8ebgEjWV3oRimbdr9zsATpc7odkmLXSGKWy",
  "key13": "47L3KhB2mGHHAL378Fw9A1vokeJjy3tR9qv2RXyZHpSHczRrmnSr3mTocA9HfxY96WwXK5g67ZTvUUzfBRgDown9",
  "key14": "5KhUkzs7ppxwfhJsCbGvNMpUKJ8SCfxcAAy4VG52uvpYZvEugAsyJzoc8vreGzQdZ8smibb5dyXCQtioD1Sfub6j",
  "key15": "4aGjZmzGk7V2M7vws6ELjDKgRnA21p35AScRTGdApVwdDXYB3NhivrHbttMkdN1iDjgQBJL91MGVg5qENLPM25u3",
  "key16": "XEWsjoe9y7gscQUL1EAPDUpqLkjXS7reXQZiswpJVGos9tR9Tep3rYcKGDQ2G2KNa92FKmxfmtEUa4d4Ph6vs6m",
  "key17": "2dxwJdRegRWJMGdByMWrYZPrTgpW8D7Bfu21zhhzo8iGDPEWQ9EcQjkgETrGnKZjquvjoC9RgkKPnz1MCzi1emPD",
  "key18": "oz5vRB76LNJEi7Qa3t411PSHWRi5PV9skAnBTdXWsusabMtryLRWQCEWZmMPWsa1wirc4b83QVkhwLJcaEWExym",
  "key19": "3bmzxz3uxqRTDAdjtkNpoZuvMJv2LkBdfJT4vfTtQzDPtTvvh5ZF5WdxWvTiaxwjTp3wwdTBtTqDhUNeDSGRWnes",
  "key20": "21xvNeWBj9DXsVX2D1ksruutW6AYyrw6AycQSjj8pNe8WsbRrEPB6u6aH4detA2JUtiTTzg2Kd5bPpVmbeUoPMYG",
  "key21": "QFbnB9fUKXigXfoRSQV1Azxo13Xd1SdcDW13bQKJAagdTH13sFy5bJJaUm7MhxrgMgjgH7hb1LjbkRnSVBH2gyN",
  "key22": "2nrBP89R9sWvfGgV3uzB6yET8ECctxKNNEJjA6ePBdFNZbiM55B4aAhPkPSCuwYxZe3Eb1uTSxcPzS15F64zdtis",
  "key23": "2TJbX8uMsi3UGksPJZZ7tHfK3vp51fzo55sXQ7TUgAW4bRgpyZSY678BC4PQTZpLLvWqbQVDWab8Q44EcCjvQYKh",
  "key24": "24zkhcSYxnhLYUPj7uWweVFDrP8DRrdGLkTugVsyz6ev5hQ3U5iF4QekfoSi2YKwwR3TGcXkBCPHemmj3Jgw2pHU",
  "key25": "Ae63r8mfyouqsRDzk71x6tp4Kt3kFXjcjFooAckjAuvHXiUWtKbLxBmsyE3Nrx3hkox7pMvZsMAYTQamxPvHpn6"
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
