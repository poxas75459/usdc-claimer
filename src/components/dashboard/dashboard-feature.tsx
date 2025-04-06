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
    "aff5eT4aaoPNBuGvrqcfNhZUoGw5taaGB9stCHd6tguzeUMvYCXbWuvXV6iyqDeN8BXYwgFT1QSUkUEfeKM8Kku"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xAU1h92fNxvQxRtiT2wpzL4sh95udCpUn6bDa1oui1P3HKxm9NT8zgrNcxPz8XgULGRSaMYX9hB5p9ghWRb2qTs",
  "key1": "4V3NLSdtsX25uNms7n1nYW63z4bG3PDsyhFxrqLqSz6tTy8vEFs6v5ovymnmP9FfzS6qKuaS8xfbVGP2FgCp1u7Q",
  "key2": "4CgBhhewg4EYLXPteNTmpzbc1UEgnTtcrt9y8pRh87absPj74KkafRXpiEpevmXqjZ78b95t7xPjWKYkjcVEdEV1",
  "key3": "64ajDQyPB2zSS94T4ZtMznk3GNQBLmt7mpA5zMq7d8DWv47yTTg55F3RzcKcngfPaiSLbNLedDEbKKiSBLBWwVTG",
  "key4": "4qvY1wD6attA8BgdBQUZycdS4YKSon2mvuBaQRXwcJ6ysCZtn9MY6CE3KoV8UckfWNNkDvBFasuvtrTv5LF1Yuqc",
  "key5": "2TvDKvFet9KWZWvajsxgMxzHJRLh27uGSVQCt9YMbjNnp3gpv7iN3rQgm5cRFX7xSmYmu9opQLSMFj2DooSPrqg9",
  "key6": "eBbtkNFhoNSkdmTEscGs6UKvy5yD1eEk4yCo2gCG46GiC4qdyJ9R8LXEVfAf6V99v2puxthXCAYL2qPvmvnVKiZ",
  "key7": "5unxjy1tnsy9VKLpjpsYfogLyG3VtQFsp3LGAugJtr7hLAdpN17idTv9Z79sNEZQiB1DfRsbNAz9hF3NQZYH538k",
  "key8": "4HEZejPX9ZSs9JR5UKEitdXTzZ8wbVFuaoQhWWJspjDCW5mLdFYHm31p6pLy6De1mLrwt1zE1uZxL84NUTCbhuwz",
  "key9": "nyG3kTEPwwF45wah5vSe3k2fBD2hUTcqVXY15NGDUmypgZkAja6igdBzqa1ZZnmN8VgZ4dYzTmrLHeGMLuwkM5B",
  "key10": "9RFqJB7P4znWxcWBjG1hbrxKE8fikL6SCJHxEWSrwmfHQdtbaBSryiMBoPm5bYzXCexxWrjZVeE1MaiR3ztTEG1",
  "key11": "38A6A4oqPbngbn4WsA2Lgsekgiz3YzJZ4EdqVro1HMSeyqYGzP6eJSKmko7CRSqUmhyFKXjMcotwzh1SsompMpzU",
  "key12": "2QhWxfJkzYchhgC44Wjeci15AcnzAbXdNptJQEoP2LrNA3YeAo3kRukDv4QWT8kWdFjYQTAM6BdoUW7vgw5yUJ5V",
  "key13": "4LZLrzkTir1kMVhUeAQJim6Mq8PzcQSMwBX8uR4ixEaU8e835JLqsH9iu7ctJmg5x7cbvRaQsnAxiG6prv84bDj5",
  "key14": "2E98TBcHyiwehzvP8FxccSmmMBmX9EaWoE2r6fVikLFSRpWbT98fR4TZWJkf93YeNXgfj3tLrdocAVAUdPcUqXgY",
  "key15": "9qJ86mTc8S7pU4Hk3e4dc1NEsDLwpdyGbDzQZshFGGHCECEthwiekkLqac85yZ9bFjM8rNrnUKQXokAk8Dk9sVr",
  "key16": "L1pHfJqU2yvBURUSpdhC66GJhLaQy8fNzDLUUza5BukjyHXL9uQrZM5Lue44XzjYL9JjEc2jip6EBBwNGVF8z5G",
  "key17": "64diJCeriuaEh6UL5sWk6qHR2x6P9UM5P63HCSWPpNPaJFQoQaRKYQoCS41wBAREFyZFNCRGTzYjb58bJHRR7uwo",
  "key18": "3CMeQPoUnVaJ4E4vZ9sCge1FxmwzvVdbK3441QqDUAPpTF8fpFPEo8UAvWPapRec36756UbkMMbft27QJAC1BPBm",
  "key19": "483jP42DHASU1jfgZTfZGrHf3QfjVZuo1RWKkPBKGN3XKMiHv9VnNtHdsecv6ckAUYn5qPc6a9EWYqNry2tfMSRH",
  "key20": "43PwqvUdqYHRjbHL2u76haRtRfPJvQxoQntk7rK95KmH1oYRSb6wpMkkpiEirNJaQYK423wAF9WqoWtbJ9Ki3VJ8",
  "key21": "2aZaa1p3vxBXJ9yS99MjKyz5VX6tMprPRFfF4NTRgydb7GrQuSgzJJ6P4rGP3gWAxFj87FbbruqJr19V6mzjJZHT",
  "key22": "4Cm6xBivbKWmrpabT7Lb5ydVcRnhc3SSY8XNHaXjYexd9rmYT7iMrG2GTGSxuMpXPHkYvYCxVGhRqTXBBhzBQWVC",
  "key23": "5E5oTErNUoH8KsYNiXZHTpf41PLB5ZADYhStX6X3zJsmS2G5KFK7U9KRBha4WFBQhiZrryJcAcq9a32e21m7BXp7",
  "key24": "53ZN4g6TitEmYHdsr2BnqfbbqBQFcAhmsnGNkg5eKG51F1XJL7kNX8dyfDMBKDo2a5hb8qEuguYbriW1RMa5z3u1",
  "key25": "2g79ocg7oSgnF6H3SrttFEB7bwzUoBjHdumveHwehkEg4MXXHAhDtiRgV3mhSNwCvpnbfHTmCdqbYybPEiTmJedT",
  "key26": "4CN22WD83vTd1uPu1ovN1RuXi1wyfvR99715MzpLDL3Njs8DEy8BdM8rYq9NFSqj1RRu2hvebU2iT9Eb2ozuX6vD",
  "key27": "61SPSiVHWQ5zBgFa4VFPnoGGVYj2Wt739qpwf8Mkb4SMY7TKcFtYzaNtJb7vkJZQiru9W3WvML7RfJSAtGtsAB9N",
  "key28": "5je9357kRh2TbizvkGN2iuWBgzGvmib7UnkgdJWvNLxMaA7EdLRFFAwBJb5j9y63P13J6UQ6Yno4S2pGwqYE1Ndh",
  "key29": "57fHuhjMRsWd3MD4zE7MKn94MrieDowJWvS6PZ9LHH3YeV6cWPLaE24zGzELNr9Unane6nfatYcJMqSybYMDqPFG",
  "key30": "5WCEtBf8biUWMWEyzahtVoD6wgTFPMSqstcqyT7LGDp6xSUPjQ72AvYkHhjicz57eask7WZExqc51YqAxiTSC5qV"
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
