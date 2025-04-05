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
    "5V2xcEDsY7q9Fmz2grAsEdfU71qMxc5NSVXDTVNfKHhAnvRfAUfs4VCMu1WE392YHs8E1bBxVvAuHtVEvVXLAuxH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KVXdyarWNv7TXrGbJ6tooXkh29ztogJmdgwz5WDBcbRM1JidfMPkgvpextbMSbCnZU7os7XYNfahKDWS5bCjN1d",
  "key1": "2p7BVhqREY1NcYLbRRuPv2QCQbNaiCtuU4yz8xHECMgTuWXKjYWXeRJWLokVN7CgfZKLVpRnmbruH6C3two3KnPL",
  "key2": "3FiTg6MeFDwixnvCSrB5wyrxEny2SMEEnm7zXdb3aeKdwFSqsmFkg7g3QTnhDAkEhbQqWZg8g7rysuYYhtDvNyo1",
  "key3": "5eegLfxNLRPWrRXQRRVejdAGpc6yH2U7KStD11zvrBVNg3A9Cwn9ts9qfpiKSfpiwPSWh3yfg57NDkYAjiqGUrDv",
  "key4": "3dwCQ6MkQxWEKJvLFu85cHEfkEANQzUtYoLoycDqyPod14td2rSRMoRGReH9iy97GtWLDzNVjTjPjLvhcpTUpSi6",
  "key5": "3kjTd7jq9wpodA4MSXjskJYDzj2cTtn92S85vQ2xM7rRHcRDLYpUPUvDt8PLRtoprbxDB7CRMTmrPggw5yhVVGtx",
  "key6": "4hiZzfs8MYh26pLNQdsTesAkhh76ecHbm5SEPgKwsx4FP44zncX6gHMtaopu1wgSN16mmJRVKCoJT9cmCDg5iQ3n",
  "key7": "gvV1MDNnCNxRAmGr7y6bN997YeerBqppxbtuRXysgRrnzzDsaVJWFXGn1Uxx3s7QKfnrvatJtti8rAoM7bRNBZA",
  "key8": "45okTiqMaogSGpvRdJVnZjwuhGACxCggcaNzR4mGwSrCrfQxFmsTDbAAVhwed9LMP3ehoqrzH13quSzc4srNQuSn",
  "key9": "x3gv9ZUxhXFL42aZejbzjaGKAurTD3ovwgStAfhPb1S7ZAr7oLHhnVK3DtMRp5faDhPKAm94qaUut5wR1mZmdCu",
  "key10": "27HUkMiegYzKgV4CtvB58JzHTQ9HwVCLjRbfacATV3CBaZGF4CeSUrFzfGFffzQVPs7mcp9259WGWv1jdsYngXA5",
  "key11": "2LodVz4zLRQGq49xXnUd6FvBziMZSYwER7ZW86vbWMdaMtFUXdAis1UUApE2NvB2sQjLZYthLwC9citUK9jTqake",
  "key12": "2fFgJFR6SYiYSkRH1UKJ62xxBPaLXksn24Lq5o4L37Lpp2drAkYZ3yQWdDBPPk5Xje7GBUVgjDc9DvxNaJRRp4Tt",
  "key13": "3hoUmak3DEyjxZaeKhmGTU8Ju1LuZ5SGDzrvKbLhRBS1jAYRRsrrR2qSrAEthnE5CGKaszfr6eV74JM3rh9rq6op",
  "key14": "4J7mVRhaFNzgnAUKeRKQFq9CYCWtwPkwKbTEHJ8LqtJHH3hQo3S38PJc7LaVneH7TvLS1RDwVpLaSWmjYyaWk66f",
  "key15": "3v3DwRGJwPk3xxQWyH9KgRZuhsARaYyC1iU2uvgQgKsgfbHVgvMCTfxhEP8TZybEw4qDx1a2GhTugLmmspwDLpUN",
  "key16": "LQ3YV3Qb8yVAW8bX9PaAbVcqSiuLoQKVsw1jZdn2m2zXxnhe8J6ydswwynrKp8jUe3AhhKyfhVXP7ZisHnrp5DR",
  "key17": "3Jbc6D9o5UGzEhQXZeDxmMyDNomPkdtwPNnZLZ9CmQMWj2Rmv9dYvVv2pgYoBbxJm6Eq2UbecK2d6paGeUAQdXhS",
  "key18": "5vavy81KiR2f5p98fPf8LBvWbLPtubhMM5Ah1RMKKqGg4QBkNTzHzwmyUowAbYCb6bj5iMfFGWRSXEye31GDTMQY",
  "key19": "4Y1KgodCeCEe36aatMtNPGH8PoDoPkKhbZDQSpUyNexkUSxiafF4mZ9v7MPZ8mnpd5ZLvqQuh9sGGgD73it1hCvd",
  "key20": "5NxzpXhh2rcm8R6eEBB1GQ9xdPPDe7Urh3feHX4AjQj6aALBG4fgUizdYcouAuowJUsu9V1mT1KwoQ91ot5uTivR",
  "key21": "42iAuGJYyRwTraNP3nGWyicfaEi3DmmYcZsiYXCxDQTZc28jXag2LNwuRbYpLqs71QtG9Y1HFajubNizLzG1Ry6",
  "key22": "2jzRk4djCkmyiSyveDtwwBzBn9KTsPPVdnHY3MuAyvdsY3Dm7u8iTu8GeiGecWfycNq8bZcNViedW96qe6Dbm1yk",
  "key23": "2VJaecDfcVeCALtrrcC253KRvenxYa7imbBi8XJnkgm6stZz8aXBBsyZM8EGUcjPtUP556W51LSLGiGUAPUKmfLy",
  "key24": "4F6vEmdVyLwYPqNR2vRLX4JA2j7Z9jMWxzkBghLkfYzE7zRnDUMrt7frZWZ6gqxtPJxLCap5iPk4e2L8rX8A1KoB",
  "key25": "65unEB7mLZR96Moo2jDqWAdVUWgo7LMCW6EzzZyzrhA5U4fEVfrEevdVm8MEBi4wC6wnu2pHqC9m6SeTSxPiWoPQ",
  "key26": "3WB1c9dR7bZrPeUzUXUjxBqW7qqdKfaKt6wPdt5NL1utvrU2ZSo1WZv9wihFYtuP3TVgfZWe4CoVCtNMoTzYmipU",
  "key27": "h89K9kbMKZMKhZhqA7d9f2xDdNL56ZL3xbjJQ96DDTd2tRFDjjcexihq1qRwHEsWUaVmbJX5phbNdwDPgSsacDK",
  "key28": "3Md9Y4fuNeByHmmkuqdTixycppccXKUZuQ9hrnm8m9KM6sHhhdcS2h6m7EPReoAdfkQYtomLq8NF47GJESu26vMB"
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
