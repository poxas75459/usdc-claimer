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
    "3HtEBnuzgV8d7ZUyd1gMd9UKCZK24cvwEVRdCmiaBVUyreZPGQt6cKkqWovUn21PnuQ5gwok9HCBP1Y2HmGj9eUD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VNVk6qwBXCZsAcNWwVwFD78BtukRp2RBtKdn6KYnJnCCXTTabKurXdNWDXET3kj1TfQTfbzopk1YFRHsUcwewPY",
  "key1": "2Qwr8nkRdAU9oC7eKoYyBZ5Df5UvcrSsjtSPh1rv2B5v2JfW35XjkFDCtdS56amjmG9SkuAcLZ8f7nP78cMRwA7F",
  "key2": "3Pzaa831i5mDPp9yJ6cLTKSv5sGLprPaDyhwyC8gf4HbcWcKFjhQf6HEtVfPaG9wHUrLr6L4f3Ti3TEqnJGAGa9G",
  "key3": "5CbXzhBnbNWRFcb41jEG7gpYGnxM4sYxnkh5yKPdZxovCueEf5DRqvfwfxc3YkjQN4b2SGeb3PxLaXt8qnbXCqYK",
  "key4": "5mBf5smYN53sTYypfGayB84hFDR2ko2HrFzD2SSCi8va7n9Xyseb2sgXEeUXhdtcF6TBmSWvghwXrGp8NN864QhW",
  "key5": "4NhTztv2wMVve7S7WGQwKq5gx1YwwUauvuKuvSJLbbtHAE9wargoXUjREvjXo4N1BddNCnsujT4fnVkNFWhirVRt",
  "key6": "28CWGrqSj6B6hT8fs9vRoEtzpY4t7QXxNPgs4rtUyDcXaSwdABSJ7oUfMU6p4ze9aGP4cxWxT79AAhEEBSuKbG8e",
  "key7": "3X7fC9cbE3BREyG18ysaRUPNiHd29KKptV6y4NMa3hAFD6Bm9BGDYFh9C7X9XoBer2XkPKVJo8i9aLG7cXvfiKSv",
  "key8": "22QqY9SR5Y1DgBR1weN5utgA5Ajr7f8twA1yxc4JLfBpuWrabSxZzMUpNmPAuDyMKTi4EHKubHPLFUg6XhancCgW",
  "key9": "4c9uPHxP7Cd2ENqocHvTgXrfZWf1WBmExjCBQ2v8cUj3utLwScrtpr7arrbTpSKXqrRQThKXX5C5cEgLhcZpNNLo",
  "key10": "3JYfZHLQEcx1NbMpV8oYctee3FyxZfEQnzqKGEJAiL7sMt7JUv8GknKN5xdmDDdQ9NwnCz5rjqXhw75PcFATsqMG",
  "key11": "5c6PugAaWC6FiPRWRzaB7TRLvqgEj1YWFEywe7rZS2En4zQep1rca2yZtERbqRMFdvwBe6AJo99Bb2MsXEhdxFi4",
  "key12": "5Nyk1mLDG76wH8gDkXp9pA3cMwKEhYY2LnDf6zC2TS6zoVNAYDF7qqQ8g8BVvNooieWCc37QgwRwkvk4c5pt7392",
  "key13": "54r96x1tF4LZtpGoXLkUrMCV1b2Xi41sTNwMr6CUNnvVHmtsyYss83rmXudFLYzVchekYSLHHLpAtP32uEDPaNj",
  "key14": "DMJAHERGkux8rTejYGG87iY3rMszWw2x8NoPyXRtJ2Gx2RuUPTEygmNCgpAsRpMt68Fikf44VoKbdMTjSKWpuH5",
  "key15": "e16FRjWnEd2qXKokcdgpgxCsaigxMa2tCUzPDeRwrGhLSCDd9iupMz7ckkbga85e6bsu9HZkBNKgpGq1Sg1eQxc",
  "key16": "6zWXAwbh2icn1ZJGApZQpy99yzj2d3aRKv6RbNmx4ZfvTbdXWZufNf1XRVNboZkyTbFG8CiyzLHykmiMpbWZxfZ",
  "key17": "5GaQA3ApvAZUhDPHwtXJsteFGrExY1mtgVB7ZRA8bAEKQfvHGDL4tTLvi2Y5UAgX6AU6SViZgnWGsz1cX71EgJ5d",
  "key18": "RKKKbt4tfCGhjmoNpJcGMagDpRQbPsTdEmVQHoLEoASnKq5qWuiw7L8s5YVgHUjHvCak3FpqSbvQqGQpj8Li9LC",
  "key19": "4CZs4k7a3NsQTxmiRMreXaJssyQTCdwSyhjVF6Y6hw1y5xvN1n3BjkWFvJcsebo7v2JYCdFG89RNTV9XySZ1kHyb",
  "key20": "3dZ1P4iAPqZNu7skJ5zTW7KF7W5LeAgLMXvLC4drgkvsXDcTSnNKYzYHH1M22g2jPHX54EFBvgjVi9Szcx4vQgz9",
  "key21": "52tDWYkvFM4atKX9hhrfFac329PLTAnBAb5TK3k1XnxJyxWfmVpaF7Krx4fPjJtPP3MNS3NaufLg5G46o36ApmZ7",
  "key22": "tDoUkdn66ENgE7z4xkg3ADc9VKsuW31PMoZvm5R5MNs2FGRmUj9HvBpJWJUXJpnr7vVpmTG9gapb8CMwhx4tRx7",
  "key23": "26jJaqtHtkwunw72ARNbEkdkBMvJ44KhcopaThJXjMbzXq5wi4KTDUCKnwxZ3mFT3dVXd4WJ2YWRusG9W54tPyF3",
  "key24": "3hbWzLV6k28uwBKETkQNBpQjzX63mifubU8y42NnYL6nBrPiyNdcsTQqvCxbowpNNgJLZSe59opXGGSX6C2bau9q",
  "key25": "5d8gqLUfaoFkPuoPBD12Nn6L292d8iNe4vmYcBTZUVhRU65r2pAXWVo84gmnqEsimrDYq5AsxQKRVwqX8GUQ3yeF",
  "key26": "2dNzo4XuB7vMcNjh7KHVmsXpaVCTwGWi5AtbJYb2WqqsYFRcHVmcuguWVJXm92oEitBQcTsw5mgomopvmozyu9y6",
  "key27": "2zUXzG3eVJsJvjnwP42xAnV5XkHSFY6SWSFs8pVxWo9crAauPhKtn3zSW8uoePaYK6EcWszEK3yPEFasmuQmRqmc",
  "key28": "2XhWWVH3Z2fiPj2JseqkCUzvbsxk9tjNnmZF5UMa7FPj5dQirGEdqah4b2Jj9XKGjaX55hVdkPG9uWyi6MeGfzcp",
  "key29": "667sgvuAyEH17iNSBWMLDq4f2apYkMh9aRzacSkD69nqDTg7H6DZuDhPAmR53Ams7M4vdwzTP8oor7DhCrbtrX15",
  "key30": "5z8BTCxdz9ZWfLyCAcUWAMr8YbmT1fF27PpBQU3crRgiPoXGxmMhUpjDJbXpzYShynCbvSFR1DPC8YmSv1fSkcSA",
  "key31": "4hhawTihNu3WqNViRmaWRjMTmnw3HF49mDpoYFfL9X6oZZWSqMbxBXnMG1t9pRv1MMoKMdDQ3mWTkbt2JCCNd7pJ",
  "key32": "3vMvZyFN9Thb2ra7LvLBnPT9YFdxS6HkEKDrGwb8U9MAWk4xMhyHpEtdMHgRM5NEduMjP8RoiFMbopWTH9XoDom3",
  "key33": "C1htheGFHtJo9rZdurJJvvVpA3QBJsNP2dkcbYx3QzJGqMMdJSgBmPoFnKggZcxcYNWbUDcqZTnDfYA9gAEr8ES",
  "key34": "25mEd29E7JnuPTyjgbRbv4afdY5h3tSVym1HgdLBENvW4v17RByyURntsBkCcgeotgtFsG7PHHctd39TSALxFCmf",
  "key35": "5QpyhTUFdFu2Uep55Ct5McrCKqYJ11Wsrw7oHqW4F8YshUKrKZ1k8WBxHrMYTsXNw2cM22hwUzmi7j61ra7YigTx",
  "key36": "4hCfdtzBZq3moGDtGu2MgquBx5nJn74Cx2RPgeasyNmGXKpmi8hHXuotyviEt6cecBkffhzYhibZsSqBfNq1kg9b",
  "key37": "2F89kqVuoFhEDEmuU7KhsrzbzvhqUiRp1hwDR4oE3BLkE1TC68cVmksdQsrqAi9mNDZhTWSx8oHmijxsc37ki43K",
  "key38": "3gtp45igkyakKXyzCds9E3AHWRV6SRyQko9aGG4P5ucAJLMnwyND4hvVdsHdy3Kk3zVY3jhJok7jtULNnTXiY2hS",
  "key39": "4BF4GQyTokpM2MFscp4jBizZdjDoWXgo3bFfLTmCvStQku3TFSfVcrDRJbYxc6vtJEruqsx86QhyogxyJJo2smUr",
  "key40": "2tmSk3WXE9QtryyARdVtHQArkYUhNctXzwMT8LYPvrKWZnv9QfKaPxU8FZyUpQJekDhys8r3LU4aMe2kaLksHCRx",
  "key41": "CUHoMuoD2rC1zSGxb76FjawCbDRCBoXN7bBuKQoe2YcAPU2oVEfCzE1K4w3VpuJvQsr7NymBgvxwNft5M27WQTm",
  "key42": "2CY2jgUiU6SzxMPaJUDerSKyeUsrnWfzsYZDz3X2kXhbJNR8sXLKnCMnKkZU5gnKkmxVo7wH6M7AchrM4AcYGUDm",
  "key43": "4ahHv7rKKANgbQSAHkpvBrcRDCfyi5ZqkfxkaqNeGt2e2cxzGxLs5PGPsCCc5Hm5Q5cPseSLJr6Pw9JjpGHUgpN3",
  "key44": "i5XjnaUtG1XxW7nfQ3J35W5KG79hYrt5qMsBv2rzdcYTCfX3K2EESK7Gqbr5Cqr9ZA63SQHFWmmHJzzEuLQVko4"
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
