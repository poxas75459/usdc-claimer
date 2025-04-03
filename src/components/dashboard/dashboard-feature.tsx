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
    "5GKgx4vxts8Mi5kKSqE5b3C7wfn36eyrzvfpuQPAQ5jvdvKmgtV8WRcDwrZQDYaoqYwmqiW91oAwnU1ACTrNFJaN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Pp85bm9rT1GmzbF5wQijsm8hn1vtwcWd84gXNFW2WkCM1qxzD8FBn4LjHmCuNWTdRN8g4XAQP61HyAwiJgcmFEK",
  "key1": "7tKHKMi3E4gjZLG3oD8MYueeqNmwGCiioZRvDSRCe2N87E914Laz1eTY9SXRcXhf1VmCpREndqU8tiwbkfE39i6",
  "key2": "3vWELfx6kQ2xnZ2FpXW5WCsvdKszeWkMM8tAVPC11udVqWSqkjRvyCKTkkW8KA8XMDUGhoGnbY8Kp1wsRWwJiJnG",
  "key3": "4s6PJ7RnMXVM1JWZrRTCHU1QEgKdbCi4g5t7pMr4nwfpQRosPngHVxuQWaNPfMMtNJoRJaG1hmyJDgPBkB1Av4M4",
  "key4": "gLmG4eB7wcDhTQSzFinVRq5GotvEA68A8EQNHuZPV9Z1oQ1MS6KfxCmERdyzLSs4ew1Am9NDc22Mju51xgsxJf4",
  "key5": "NzXhqaud4YDmY5LgZV9L4bw6xb3P1PYyasu6f7NEyBakTqWDMCamoQAp5a6DoysnTMMNTgtHMxVGFWNAkMmj92g",
  "key6": "2Sdb4WVGSM4CW892qdNpwMkCjEc8fQVZBnaYmEa4z5UiMhA9ikUkW1L4gukjg3gRRV55Lwn6WP46n4Z2d6BLKVhh",
  "key7": "3rdqzSJqNwFC2C8qYUJTBZKuPk5DrZcHV3oCA6z66ELciVni8uYRBDuBtvTUzzuf7MmxoYtWNzB53PMH8M5dAfL8",
  "key8": "2AbD6gx9W5FKsZf7qmGGcfzGT8NKYUm9uEz1tPSxAcjeArCcQwzJTP6Am2pMjiCmXdNBcAvNTxm9A6cnZWZfKwE3",
  "key9": "63W3aE4mCC8BTa723K8Kef9TZxdgnp9mKXA6QrAm3aybKYUYcXgGWgY2E8CZMj8naYCa4hgxYoG2XDx6drYBoH6",
  "key10": "57xqzAsFxUVvKpBD24DBLte31RgzfjJqVYmLh7vvYmh4KPpprtZoPNTGu9nxn4t98EwFzebZiiedUDd8bC5nuYV9",
  "key11": "4Th1z2eYiosRstiqLAGHQLhcRqbFKpWfJawE989kpFjnpHQqbvNYwkthqw37ZrzMtiNq1DDUaTZxvixcNmgzJddg",
  "key12": "4ZYSVFztPZA5Q59WL8Wi6y3L25Dt3oVRQYxdHUSyprkfCDLQK3SnBb7Juh4NU7Aiap3pej1GmVjDrc37fVoaoAjH",
  "key13": "57jj85gypZDR6VutqceddbsexjTndWVK9d4Q6S5GiDiQmBwMaVVF3gh4mUyTpE3YSC8dMjQycKTgymNioAJuNCqx",
  "key14": "3bx1Ln3AkdeASvbyTXuRYg7mTrHVCSEBFvWyv3mTHMdaLA5s4iTRqgByK5NGyQPaWsVtngGmCecpDrZd51fN3Gcj",
  "key15": "ByCH2tDUwa19QMsjuQeCzEBwX4X4nS9k1ByMG5Y559eFKwrxf9CVNfA3JCYr3mLyyZ84kBP6YVN8nEuN5YweUkk",
  "key16": "VyjUJPszhkLJW6pRLEPeEDdtyMDd36wmPuNxyEeZWBCcnh6k2mdEKxJnAm6N546eyrZSMmxGACKoTYNRY3X6Pxr",
  "key17": "5TXRq4TqBpTVRJBB1hK2knh81bXYszbw7zUzHYrkKrMSirvVafZQaDuWDUGYc5izAoZ6qcxeNh1tbAFh6RrrWyDj",
  "key18": "pXHBSzFYCFDiHqpi5BeK5iBKxgNzfVXPA9sf4UBf8aqouzeaEJireEwrf2ARCYvqKpCP6FzkwukRBUmqN5kESAw",
  "key19": "3iiHCkcMCLxGgoTLzrKjs2WAxwXqfqT2QoiEFKu93Si9pEXVg1ekjrXZzE5rsXfFNWNdUPTB3JtXrWt5cj6usWny",
  "key20": "4heym9gEUepWDtjF53WAnwZiguwCMaKgqiaksjtQK6qEtkFfdf7oPLH1GJif7SLvX5fE3GuwkfGxs511U7tgKDsp",
  "key21": "2d9DfgZATWKKrMvAV86B8LWAKKZqeCkHotvWGMpqY8yEfQMtAHYCVyh2AUKAzj9uTLyWFB8Qh3xMtanFqwSo2nqr",
  "key22": "3tJJ4FYGpYs7kwfZ2nBBeDtTE53V64sZJ77QRMZZyCxrd9JKEeenavcLHHBNqMnWfzcmv4sfdYb5u299HsqBRLrr",
  "key23": "qJBZPds4KSc79YgrbK271pMsD3HdnoM5CapLzWJ3JFvyY1Gevs5VfQQ7RajXptGmnCegUt6RsM6yjFXpqgp14UU",
  "key24": "3VKQ1cETHxn8GtoJYceLer47sPC3TVpeqgdhV61ZKUyJ8K41vg4V5mDNkTzhSJdDzDHsV7Jcm1VhCtGR8vpWfyaP",
  "key25": "2Ud9DhvSV29RuURyco9ypmBqg3HrUY3S9VDjJwfZPdQnNYgpd9dWeA551Ujj2QsPbT95Rg6UYtsaN15EXebGLCVu",
  "key26": "AjfoxQjpSN4AV4L3GEZiYJNbLYvjJuNwtrgV1x9RgcDonUPR7Hey5PmjXj9Q4YECibLeXpdJx1bW8k2AqPLp1Ea",
  "key27": "5HxrGb82edKrjMimpR1tdkxCFMXmLK3jMCygr2HqFhFFXPsbhiGoNHTFW4XoBpfizqunewrRnnPCcB5WSHAmtrpK",
  "key28": "5ke1woXBbaMA1xfHbF7Huxd2eeys9NEq3pGeAWGSq5thEiw7DMQ53Xam8YusA7bQji69UqcRVcaURDx5hvzQE69r",
  "key29": "3bKqhuvx639kB2LEXiPuCk3aDecY63ZuKwg3WdhUqWBm4Qx1ZFw9pf1UGChAHvx2bR7F7BGi1kNqmgQ7wikBQNQT",
  "key30": "4vAHEeb8f6S9NsLBcBoR4hAUsvmTNDreu8v5C5EsPeuxAC6Xf7UvEiJevJSkySe2VYPwn1L6HgY3AnBSPKHbcCbB"
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
