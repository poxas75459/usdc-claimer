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
    "Ak4MrSwc2R4DcCCyw1Dc6LGnHH1aUjZdPaMTL4VfXBVFGTAUiNRsP27nV1b3hQempM6YcF71Bafs1G9s1M1be95"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LsxfvS9S5oPeGntg3iiJUAhzSc9Euq7Ug1H9cn9KoFQWtLcbev4a6t3ycEA84z3wsVfKXpqLUoM5Ed6pnbXZ8Y4",
  "key1": "4BWEGZ7KshiXeGb2YcSCkDPxWKRKLa57fV9ZWFCyQaQmc3mLPykUugWN9TqYqoKCp1G9RuWDWj2ozWnJZjyCvewY",
  "key2": "3bg1LwQpaqFhAxvvyy6KQt5CMLWsVBK5yDHjZYB9sLm7QW9SXABzgePxu8HHNJynw5qLBGUbcHFDniwBx3FSPk3u",
  "key3": "3D3zT8oxGZPK1SfzBfrryLhHwL2eb9ZV8nVUWwoitiW8vZhxyZRk2vjKuYbgox2fGg8Vn8Y64g6rjLP3HDz769MW",
  "key4": "4urq9TMbfGrFBC7gn9gKE8omvJB6qzBeY2LVkt86fz1cycYEBwJYF79Hm9E4kGLZMSfeDWREe6QXdFkBH2mawHWz",
  "key5": "5YphjTkunnvHi86sGRXHCTxEHF9p746riahWsrmyu1cD3RQzTeCuZ4JP1paGhtGbjbETdLHAzs12gMqkqfhqGgFo",
  "key6": "MNzVKKiNnUNbm484HTdEdK7quATsJjtWVXQYfhZQSp2L68PNpiZS1AoCazqiAEtL9cEP9cfcV2xUGmhhidcd4J8",
  "key7": "43uQUSUanfyx18ixTpnX921CU7h6Gj3wXwELsXeqeRhG8APCi1wJNGekLqHP9wY4G633kpBspajpK7greXcxyAaf",
  "key8": "48NPD7Rsxh1K5DGRhRbDoqRFT2p6RngoaUcqhBhv16kJM8SyXqVToQWEDdBFWNChvQetdS6hrnZmvPhddC3zQc4i",
  "key9": "5pALoVgFhiy1bm8Kb1chaXUs11uUQppg2MVWj3sad7bx4L6HNmQ5ee9JB7v64iTqtPSxLNQvawwMTiFbscCt1YaJ",
  "key10": "5rm9drGMu9338SXRCrLoKzbYXwzCnoAxhSQnU9iUrobM4yVb72AYfkgpAky3Hb7z2Vcy7ehq7jVe9zZptDcCwLUP",
  "key11": "45PobSneDxmQq9r8WnDJZ4ADcgQ39kC57GwFvdUdn7F7dXUe3Q9pkEydwpoMGuh6RXR1zgtsYUUBsbmM9sRr11L5",
  "key12": "64mnVV3EqfJYTAxZxTRiYtGb9QzQ6wxE5XbiqNHPXgbe94vUyixb59GQCdKiby1PcCZddLNmD2V6Qo7oXexNW1uK",
  "key13": "CJ7mkpzaZ18NCfjYw6qtcCuVGf17LHu8KNTYVGpgd2ZEkyYdDFErJEzvteEFrmoBAWRuwxnnuaT8JHCJcCdnjSD",
  "key14": "4NfvbSBre34RCUx4Hh5D6pb8TdeQ1hvP8Pti9sLA6Z57Exp4cwM4Y94Hwsbp1DcfGU2fJRpVqJBtrHrh65eHiNWm",
  "key15": "4yoAv8VsqsVZPZStLFU1HxZNzobPtKAeyB7gxDjypdAEEeHgPcJJetExWNiyZKcy3HPbkEPfsMjdL2BcPifUS3J9",
  "key16": "4ojG8v9hF1MjCs7XTeD8WJJMCyrVGd5mSbemguHUepxZgjXYbyGWyPxNSzhV62kixtavANVov9TW6aK1n4rMdpkr",
  "key17": "53eXPJ2rbzJgPZPQsi6BZVBW24QcsZ7Rk8PeCSLbsswj6XufxZWsdBuYU4cSsGYDutsvnJt87skwa9SApcsXUiAs",
  "key18": "yEywMAdTvAJjpSHgjLzdXBKpkcWHNJJ1JsPtThbFE9sGw6NvPAz1GKHvSayX8PbgCKwgpyGvnpRjoztVepjNyFd",
  "key19": "2uh3Ss5pGWQSjyVSQ9jUz75SwCuzAEHBtVoDp7merRa8MVjGhJHxD6V8GNZ4HT6c2eRTY9ibN6MXdAVGbmFozF1f",
  "key20": "uM9SWxjGgyqE2frKahA4M9QjKvnmL14s8gyC2evGkTieQZTTbA7DXZ5XZCDTuNJVXct5N3AjNMyhKiVu8wSbYL7",
  "key21": "64eAY4mLmghXtSJkBQznTj2SWcS7dNBngzDhtJ6oSM2WZ1rYYLX9V3Cy8iaM97hKqetHYJfMytmWR5ZrqvANFWX4",
  "key22": "Rx5WWx3JffpNacfw14CbSHbujrbeY2dNG4eewts67P9mZevgXVM41Lp2bfrwDtrRs74EPmAzjNGqk3QUGXFoszN",
  "key23": "58oFY2Xat27ZCUXnjoChJ4iES1bGoFLBn3sZosvaib7ui7ULRAg1WNvmSRQ8VCLNthcBid1WWUQ7Dnmp4Ma17ZnP",
  "key24": "66kfH23trHQwqtEJfuo7Efg9wZdrsbtqiFcUahY4rxRKbB7kJuoPfeLHQpzbUfygXzTTkgkLiY8KkgUh4DTPC221",
  "key25": "3G63NiVdJHmr2pvXuQUX33eLqCaBk6WDeTYb1QuMD7D1oV2d4bwyQVgVNMee9kywzTqFtcKKJiBMgr1a9ZpPtbaS"
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
