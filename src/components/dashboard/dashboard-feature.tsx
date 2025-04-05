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
    "3eDiPP4Qi2Cy3BwMujqYiwwUeuYA6kJVD2nTXU2k5AQNqthzvAUmz86qFhApYbPc1BBzYkyz86FkyTFSAikWoKPJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HBrjsQmRkaZSPT1xaKvjBrT8M14cjCeQpDS9NpErwQ6AFtrFYSuUKT4KAaT6TWKTFNMnifiFm6yHMxpKF27kmre",
  "key1": "63tq3f3qkCgXhGz7mC4au67FoJqV6ZUBgY6ktbBJr8X7YUFVKzvHXdjL8v64qmEi2PEuweJzTtMev3t6H5wCyvAK",
  "key2": "5dSTSWB3Budt8zGfpiHoqxqZ9q9jnA5vYZk624sceh8y2n1RYU4Ea6ycxV5EMNbmP62JNfp13JQ2KWaAMonVNc44",
  "key3": "5YBTra95mgq7J11Ruj3fQv2ktaAKTgQp6nchhyrvw8Gjx4TwkpAd5TVtM8EBNBZLfpJCMZA3awfZuLXvhYwscDhg",
  "key4": "4wnDfyouURQNiwcqYPd3DfXFcDkZHaxieumv8arn7j65kCGXpwuBcR5t4BEbQEu9yhGGd6hCC6Qd4SU2FbHFMfsC",
  "key5": "3UHQAJZTSiK7J5eY1ddVPLdUmqA6viixF6vc8ySTTpnDkRDx8HvYvM52BvnzKEVGAarYgBik8fJBLMuArgckXKeu",
  "key6": "5GgVRaeNBqAs7Jfrg9agShkdgYMwo1orbV3cErq6jWfJSfNebBc7wkq9GJacDJa543yVAZULoncUcTKc5fnvFMmt",
  "key7": "3FrEsNxAd5WXbAKWTPx9fg5XJwXX2HnoEv7WijW2Kfwd1ut8JaPqzpYfXLxmfcwQHBDEPApjo2TZA5wDzivrwNsp",
  "key8": "aZf7xnaXXwNEqCh8ZRRwXK1UpidcpWET1jmZ7HvGQBxBQ3vespXMno6mo8hGcaKQd2NYhkgEdaohKaxahFeyUvJ",
  "key9": "5typyogYvpHM92LpNitVcpsSNnHfzJ9oZupvqa5h7atfa4SYYx9ZeFFLsSRWSqYUyr5qU31LkpCttq8qH7L33FQR",
  "key10": "4RCLQvCUr4Eoo5jRnCr7KTwQJeWWMaAvhptqZyCdiGw5DjYf1Pcm1uKygabPRwKKhbrNNPMK6jH82gJDuqgSdcc6",
  "key11": "3tk7EtYihQ4z9jUSxWRgYhaWK2QPkoN3PYx1AcZVkA2rryMw6RLhgiSpb1B93kWJk3BTkSPxWJKeTRPiSN1CnDMK",
  "key12": "2n6Cw18FAw92mdXpnkcZrKGoxR7rSKG1ioCaGPAY2BCbwfde3wgpq94ZemULHH5nLNvSFrRB2ZjyVQE71tJ9iKQt",
  "key13": "4xGy8Q28BjPSfP3hwbnufAYCbRcvtwJ9H5BdWbtGApsuTHsECMEEfwNfhr8uCLv7WTAns1HtNR8Mo9PQAUSJwJwP",
  "key14": "Zv7rYJf2s2c3ytD5N151hxxo8xWRpnThKeBU5NzRZZNhPJuwNURBfbLC9AaioSWErAvbZyAWaKpNWVKMNoG1hdL",
  "key15": "fJwS7eMEwjWUokG5j58hr2Nh9for3KKNiWHeLe2EYc3UHXZvQduhLJm1tNR7EWz1gPBL5ZS5hi43GGDWJiiKZJW",
  "key16": "5PZEnBhM3efiTHyJUJ1JA5KPNv2CR4VFx4PPk3KQcQJGA5Fv5ULci52x2bCaPxviuPC56RBJQZcmuv6QespskUKo",
  "key17": "5SgDAET2ZGD9HSWxALVwAYAniQJJzNRTq32ovmP2KF1Tr18VtCr5ZvacbvEE9rmjbANAJWcmLgMchtiAZxHRV2kC",
  "key18": "4Dz89GGXjBJ5uWi2kiR694L9p6cU68jHWpbohXaSbfZDeE2o5621PHJFwKZFPTnQ9uHryFgMVSk4KWWGUecPisV7",
  "key19": "udtHvAJ7vkh5dVKFuj85Dbuj2HMZ4WMxJbVGRtEq2k93WJujbt8GqRSowiY5kv6ZyH42Kum1acThgdwTTq3Ufja",
  "key20": "4JMDCfxdizbqs82eYdHxfMcBGL7DLiavDjigvEHJHhYs9zjyPtNhmZW4zUWi6DGEykxtueeSQihgn1esNwJtCTwJ",
  "key21": "Ygp4dFKUpVzDPcQbsNuCCkjWxpfPiZHckRDxUfkgyAketmnqacjQegg5uiPzQdrd7Ud9Migf24S17mMtU3rp9EL",
  "key22": "5eX5eFS6EMpgLo3uuoGpAP9gRs7z9qUsTJwfPLnq9vm37Eo8b68dLrCvYYb5esuVLDU2aUizpeGZhYVvRfopoJ7g",
  "key23": "58MoznUSns2MkwhcFLnGj5DNnWcT6NsM8xqpsjkTxePHS9w6dvY62taWDxjUQJ2xdC8Nz7K3goQ9TrBCdZwTv1XX",
  "key24": "3KFSqmFpVq4GWZqw4n1uZjCnZU1mcBkzkcmteGnaALd6DqYWtoQMVncUeJWPgvks6bzJjWFLQ53PH2rh9Si5hqUN",
  "key25": "3wM7e8Ra9cJK8dqqg34LHPV8oXd8TdohMBHU7i7sobxKEtb459ukjmxexRpN4BUuS4T114ZHDeVxunAwBGbu45Z9",
  "key26": "CTjzARo1FEeikkqLaARAKUhZMTSZPCPpzMV3UyQ1knRvkPrvKXiZ8UMufTZAvusEKQzMKHjVBn8CT2X6QXSDqcW",
  "key27": "ksHiCiPREFxNrHX1zUNxdZbZQ1TzB5mYaEefj4RSNNkwSd3j4MjZ53SEmZe2RgZS9ujoGpcHaFYgarXKN97YjMo",
  "key28": "2x3Gono2WgozLTKMkg55Rsk8uzNGhcXnbNDcxoFsfn7fxBSuUJeYL8XoNADdR9ieHMRgjUsBqdLF8yU6bgboLQqy",
  "key29": "4HjkrEPg2YPDsiMTHj7S6rAAGX97V8EQqhnZhAVNajTSC9jtmAomKa1fXfxG43C5hMiKbFCvhWBneU5P5BoRrXyq",
  "key30": "2pYe71VZobLCiy6DaNDhVLhahP1VtFavVsNjcMC5MKAtCspd9fmgoJyh8bHcpgSERRb8g9i95orf99RkC1ZAMo5u",
  "key31": "2B54oaMG4ky1yvJjCUoUbBRzo4k6VYMdX7XyjCeyxCqtaDyVPfFpVyXUk3aYoQ7WU47z9y2SnSAxtuBGcDQsC97h",
  "key32": "PEimzYhvy8fdZN6VDWe3Tg2pZzM44c9dUrxoRSfc1cGZNmarpMnHA8zEcqc94nGFLC9JAMjNk1zqPktLjVCSvRW",
  "key33": "3P71KqMuPgjFtDtKCQkQG1ZrFayyux9LcKBbZ1MNmeztg4goQaAfx6rf8hZaaEi5Lb9wJr7bu4QMW6A5pS6phoAc",
  "key34": "4YrPJnuojdygyt7mPXmYa7xt3FVyXjaVEwjoac9VWL5jbtT5RKkCisrPeoZ4Mqnnft295chgMzmH8tUvTg7gdCVC",
  "key35": "2XQ4SnGbVzTrzLh2JttvM5QnJ6nhU8uFgARniHKxX6eKzcS2za7XqJse6QgnoMiCVMYGFvqtwwFyeqiUy9MTnemT",
  "key36": "5BAK9t2Huq5nfdSGJjqF8AUUnLJ1WRHyEaWXvw8eQmK5i3jSnGBNk9XPEBBffcuYXRPj2VBummymHgsHS1zYGHgo",
  "key37": "GHWj9q2qgYqq2KszxBtTeqhv5EEBAdmM6LQLq9m8ndxgyLLuCQ6KMmpS4XEp5MU98pEmqAm8TkWqzvgYsVchS86",
  "key38": "2vaCRt2kVgin2crkBrFDs2NK3ejRVBs6cAKFF7X4TRoSMArve1GUDnyw5eXRGmzf2dSvps5MiEb5raGwAZesdkJ1",
  "key39": "54hM21rxRmQjhuUSkfRMs9PKUEsUHgUA4wKe3orXzjR7r2odje965BEqp6wiPFmHvemJpDxCg4dsBfjKx4k1isSk",
  "key40": "3XFRnmrTjxsiSqsiEtUCr8ztdELoZeciDUaub7gscJbeB5jkZ8mUkgDZAUbeBGkFDzAQ7gVE2JSKwesuX4jv83u7",
  "key41": "57N4sJAtrNET7NJETesQFQwfwno1U7YhBJfhQztun6ARRgSx2Mvn9XEzvdcGarKPMphpSzQ998tK1cNJnN2XVMc5",
  "key42": "31dNaCQHQm919BXeFVuuvMt2qizQewNFfBJ6rSZXfWPG5y2hpD22esYQgvrMfMPW5b5dAqtcVZRrBNTYymu4DTJA",
  "key43": "3GLCo22w2gBPnZKZKKLbuPmEuKxTh2KK1r21joCBjSyDFVESjGErKtj3Htix6sJRBqjeDo7D2VMQdU7jWYt3eGX2",
  "key44": "3rXUHmPgr3GgAP2HTW94jNVeBGxffGnernxcHGpgu15AUYDWjbsVe1qiGqztD2JrWnH2EAB2nGfLGsa3HHKF8paJ",
  "key45": "421G2j2hLFzVwkQ4ySXV8RehDCmK3ASMVdjD7gJVh6YGAYobk6mNfdSwQSadhPdyYAgHy3zPCxDhovnay5iW1YfM",
  "key46": "4RgWQaYbSQ3CkjKB78XqjYJpuJqaAfygpMuxUaBcSieCisQt6vH7PKyZE4dgoqzzEuijRCBDuyFpCk4vZ75Ttgk8",
  "key47": "4ZvFGcmNuqf6ovP3TNpHbqvFh58f3TEKenojT2bkv8EuH8exkEXGoAM6moQJ1vCxVctzHfeDbBMQEWkXAq59amWz"
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
