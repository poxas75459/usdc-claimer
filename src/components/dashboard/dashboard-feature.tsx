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
    "2xwnDth1NRCFPV1x3aMpX4dqmo1jBQYYHQkrAbeiK1kJ3v2xay4QsSchBv7f2TgzJKU5bw8Gecyui6i5LWgezPST"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37a8NVip55kVhAwusEdh2MAxyYfq5PsnV9bszy9cUSmhaA114qiUcZ1wUi5zd11haq6BZDanSVdC3oaAxd9drJvM",
  "key1": "5AbYcBgoTdmEeVDjmxzQLihSBu2JP4uiSDG1fkEnssjJeAhU2prH4xh1ihUwGgfMJc7nbhCuBZ44WdHLKhDNvB3a",
  "key2": "Pr9BZFZBfPZBMMhCSnbmT1uKCnyQwk3TYyKuLfp7uLHkpcEV6yW8B2pSK9J9WrYsMFkLrbE4r7kRSqPtQNKJXc6",
  "key3": "5qwZGGXxjgBDtiGt2yCMFgpxfHE8d9WU3Yz5ZoeS8iavzhoAhAzcBNGmmC1Wyt5RMGfC6boLsY4W7jrDGMrjfAY7",
  "key4": "21D2uwr55iLfJqrrTgk4zWoimL7MvndjN4Ghy3VQrfLJvW9XjooKsGMwLxSw5D3CrquCMepDbFKkTeFBNJUna27B",
  "key5": "2RVXC2FpVZ1t34fKnytrvt81wjfiKeHDf8cPYJaFW6vjU8iVmJkX6vNAwqi9Sh6jeT9brTfnfzA6Yn3s2CxsDZTa",
  "key6": "62tkq5TaQ3PkUb8tQyijcWtmcnL7U4F3Y4KKhz4XPzDmf232J7kscchuwL5ZdKkx4oYANV1mJQkST6mY3EZaKmsB",
  "key7": "5ai3fKBhkcP9SHr3sh1tXDzGKChYvotDvrYr5S9JvMbZf2SMn2sh5UkLmnES2mXxdakUUKWNk3aM3TBTYCeggEQW",
  "key8": "4qmY3PcRCx7UcrguDvLuP99KX2EJ6L7uBz7RLvWLK9VhTWHbv6E3v41TkN7gmUShTFpYANNAiLxvW67uwxjxx1b5",
  "key9": "4p64j2BsKmTYQh5pDvWP9u7xk156gZDxYEZzMx132f3EJfkxBpfxgp5tfsDcB5KeuKHCAvrk2moNWK4QhdT4dk2K",
  "key10": "6cybSBFDqSZpMS2G3h5VmW9dZ8i4HP7W4e2zkxsEYt18FWZSP3kfzbA1uCDYBgXyV6QSHgsV6MHJ1RnhidwY7pz",
  "key11": "3BNPLRoFs5QBBXh4ANqzFb55FLAyj2dpGSoK7TvjcPdHPQHiuCjr7u2FyGTtW31LU1NCXEK11QPKsSC2Sq87q3hC",
  "key12": "5PktFQjib2PAZ7s4DcHTSRCnkEJ9sRsrM9QvYWt57YA6mkhTiF7ij3fAk1eK1ipAQGezow3vtQ5ujCyupUx9HQMo",
  "key13": "53iZGq7JWw1ahjs3vzEYMRdJKFNqxkx5JxniQx2Jn3PP5kCnKwwQbEzxG3nJxNxkm63sNxbvMKDYcYm9pqX6DEYH",
  "key14": "2mQGqhCSkEG3N7PaDi2zfqbNuL41KnN9q8HEQrxUUmEt1mvNbBdDyoRLi6GsmDQmYz4dnKnfb2wrHnjuSKPXccjr",
  "key15": "5FtUoK2oyrN6DQ3T9yPaozQLJwBXHdCDmsg6NmNNvqCBUEexevCrHGhLmmfBnP4hxVfcnVMHippYCWWM75EabLwp",
  "key16": "5kEqShypYXwX77w5uf8cHWZSt7g93ZhN1pqzerkvUUuptVAqYz4vMEzjokX6ijMNY8M34guiTG1sqPj9PnQefWDj",
  "key17": "3hepF81uAXGBALKNFTYxF3buVYNvwKE4769613F6iDVTnHrYydyuE6Hq6GhKgGMMtG7okiAmNL9dCS9QG3QaiazS",
  "key18": "2yDWP2WbFpgVaZCtcUCEr84xHcnrhrRsbwbKdBTDAwGSA7PgraoThWoZ3BXFSCBUVPpv238WbTnrk9zAUCT36KFS",
  "key19": "23oautBS6z7BW923TZVFTHc6hu7yRkqi3WtCSyvyv2UWsWqVtobKVM8RRmYZUEh98VNNAU4d9UXYoeqLdjZQGzZU",
  "key20": "5Qi6jtmyXh7SYVeLskfLNMgZ2sttbRMG1Z1cU3J6X5sLqRtuiKyPiw6TDuNgNC4T9wi343qJfq8j2uYVLNXHJTVJ",
  "key21": "1X5GKtZs6j7ojQbCxp7Bdhxxi1LzyKVvHmw6atUhfJWkTJp7UGspGKxLuLCMwhvBfc7gLtf1NJMMgi21RDuNbJE",
  "key22": "4rfQ9Gvee8YDg7igoz3L48vRi9W55JJc5rAAwvFjTYE8U5ZJmtzTsYV9qvSgjjo4bgsaTD5RmuX6pRWGwb9F5Lr",
  "key23": "wcivYtkvMacJm2vGUygFo9BqkpHkx9uzDJcSKno6LJS5X4rPCUeycHj1HvVnJXjZNE44zAKKkEzKabRLpNYLQnq",
  "key24": "4otkYyZ5JyWmxRkC1usdzi9ShYBXWjZf9wLpVm6z5x1bPvy5m1Dw5L38F7tm6qaJAjh92T61Vaunrh39umPZj6KN",
  "key25": "3iTcZ47tmtCP8QjVQCT2AFG1Mqk6pw6J6NqBpFWdxsLuritcYbNN7qfaDWDfFEr8hdnRBFDV5UYEkG4axYNJLQFn",
  "key26": "27NJjgZCUCPTATcgT6L3ASvwv8gbnqmKBExNhq3FQHRHDD9xvTHHm6Ajru3Kx31m5iLeHNos3eGYgfjJ9DBHaTTf",
  "key27": "4FbComGAVawsmCm3wKZP3oFuymcB3EMfja6QmbSoN2GvMcgRPEypg5aN6vZNZrruMfW38TxbXey2xAM1qt216TaY",
  "key28": "5KisqP7HUAMkrTdGAbRoPyRSU1kNH1PdBfD6XwZyfkM7wmTixhX6uWgQ3mPCSrEUcnEzQt2s4xNnQgqW1QG1QRNn",
  "key29": "5BhWUQ45UcMmSFj8gPrhFifmKRjs11kLvXbGNkk3cDXciemLa46CP5MwG43fuAqNtKSSTGzHr4fARwmdSs2KHh7P",
  "key30": "4yt1nzFNbdTAuK56Y91wUQNKJ64BwpCYxHeGJmWgRjGwbubYmodL7KaDkrGCFernSF2xkYU8AQMPwPbWY2DWjR1g",
  "key31": "5BiHcwTiLDG7HPyPABnF6nLxV7jTBLPUKdzC8rUaBtK74p6hL5hPkQWNTFfAFkEadMkimn7ky3g9oyX4mRJjkRT6"
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
