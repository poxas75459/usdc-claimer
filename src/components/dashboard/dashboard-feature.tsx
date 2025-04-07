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
    "3HhzR2b8qLFQYT94EzWLeN4NLDeNAJ7YTubXZxjGcspMSJ3a2YnhLzK1YNVQLg7CJqXrQ131FWCRN6Y2VUrvD8JV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pQ5MzraGGxMp9EobyVDEmrh1i1gf8EbHQi2sTm9WR6vRxDEJQupU52vH8KCaKUiQipJtZ4dPQd4Bu87LgcUUBJv",
  "key1": "3wxg93f9k8eWKD4yNxu9pzQBJKpEked4LPMpBuJ5ct1rUeWYQwUG66tEyPTHNwJyQEA68D65QDn6eLRnbMfMWk6M",
  "key2": "2bDjtzariS5w67yDJ89Aky2eeMsvVBsV2fHejw9CmV484orCeVnHTK2iokQY93s8MQxwEiNR5Gpdcbdntm7zQk8M",
  "key3": "2RyBa7RNK2KUZSThQPLcpkX5Ax8cRQbHtfTGVn9chuRmy7rHT9q7qVMtn15N8Y31UWTsTw2Rpx8Mbmg2LunYwAsz",
  "key4": "3h9HA52myMbfRfnPRR3dYv2MNEYtDhZme11J4gfVw9XWspFqgmcDeqEP9Gvxfy6C4UYHAA9FFZ9vdeVVyHtJLxVb",
  "key5": "4iHB4C4mMyRJvWtNXeCQPSZQ2ofb2cHR1b9BJC6UjkmeVsp2N5JJu2wxZfeZPaoG3BpibCHPF8NvnST6DRomELqv",
  "key6": "43Mv1UbCChjhWLDmcadXkCjKoFrno6bh2Pw897XFhM2fiSrR3ckZSQ7V23wqYn4x7yvWZjYEAuRctxyWdCattpu7",
  "key7": "Yh665ZXXj1JnBFhMsJGdZ4NsrhHtryB2FiN2gKhGAouW6BE81HH1goQLnz1wwhCFt1WCsLSuQ7WFZaLGzBSxm5a",
  "key8": "4ozyeYUvqtk8d4hszbyYGj826ccbZXzD3HZE1Z3CCQ8cGX1UaHHkuGVRbF74NrU34TVZc5PjDmnoMrxmk93gGnTQ",
  "key9": "4r2vV3tQJDSBAHWxTZAfum9fEryb9gBXSK5mo9kNC5n8bveK71nXVeQZtBuUfgotyqnmfaZFCLQqFSA92d7FWaJN",
  "key10": "GseeeD7juXDJMSiJaPhRJSv3yghrasmir8BPjFbrDyR7Ghd4DrUn4HCQg4jkKqgHds5tPZrYNondvkULf6bhKup",
  "key11": "2AghH2YbmLEk2398God5gxSFzvDUZLEz8YW7eQEBgLLxGLFNoacf3LVBqc5hwQinM9gz9BUmtGv5VhbtXRKkPDPH",
  "key12": "W6UY9FoVab9QNYDuLcqFntr9iL3RZFNjbkeoP7MmHcaHxGpVX115wReiX3c4y9H7Qe6TC3WLPoRYV1bvEBR1RZG",
  "key13": "s3mMF9NMnBurzhBhi8zKHMHWQ4HguLHQbWcfb8kPAN6VnaUo8oEtf9KsZjWhik3KmvLb4Li7WijhA1G1kHowjq4",
  "key14": "3bagF3SuZdZ3g2Lp7UyAyfxTWZLgNJgPHS58evbjLSJf4bpJ6qpAArPKkpJhkg6b1ojW8XTKfkL4Q55JncaeXEJz",
  "key15": "3cA99ohQnYjAghYQEHuBtPeLqYase2C2X2XXkn8tzCL7G1jVzccyfzoSqVqokeckpgZb3fs6cac6psVs4y3FGitz",
  "key16": "4UiJTcL8Nw9ByLpkBDWscr8BSr896i2K81edeM28ZT1p75H7TWWxPZXutGw1xCtG7G5ftkVceRQub7eYkzP1NiVT",
  "key17": "2MijmY6FEXg6cd8y7Xp3fpvnoNwVbaKixNQK9xyNve4ckzTrwMTHiMGLkASiVXW4Jw63Rg4yEh4uqWCZzwHHxbHp",
  "key18": "2vfVDBczXd3hdRAvdBGs4tevqMDGH68wGHAZccyM6AwstvCZidHrDyWsFccQeKyQcMNwjaTKs8H81sfdBtcmWLem",
  "key19": "Nqg2QgzvuVnDCrSMYNJCj9rqPzVJYAD7ZyJG7dhuv6Txa4krdAqktshDSvgvN8T5TsPksgKDMk9UmRj6KAxk95T",
  "key20": "3Lbyp2mfTUUs49k7zTAF9GXxQVKtMHRb5mbaUVh8yj4tmjFihFUyj3i7TvBnxwuWHABUzv6VKutwwDhX1QN7pUG",
  "key21": "ecgxFhAZrJLgbbMZGfFVe4kciGUKtFFAQyxtnoRZ5uJBh6wxDkVx888AWFdGW1reF3dL13XLbePvTAQwJSzir6p",
  "key22": "3C21qZQfmFGcUM2N7UcZ1reDNYuZXpTbYt6a8vbUx7NSxj5EREMKZ6wr7LKDYCH7EVTS8vUAyCMnt991ciTv1pk6",
  "key23": "3NUh6fEzSd7phAHKXKgN9tj8QuK863fxVYfiiFWwPt9HZSmK6BkBxVb3NhSSSgqAqYcqk41RQBpz65171G1FRvj3",
  "key24": "4Dwg18BAJMW7fi4jqLKcD34NbqcBXvavV6AJ57Zc2NFn8HBnRk4wGsYHqpDcYpgEbtrv4XqDE51ovGRnTRfsWXki"
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
