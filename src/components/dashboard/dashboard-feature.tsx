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
    "5JVbdYKfcEhhXDCiQjRVRa68GE2qpoCcFA6bSZf5DvgxnBBUTDZXFCAtaQ7b4s1D6gWJvGZkosYk2aD2F5Reey4v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "241nCc1GM1qmk3E4gMt45m3zi44JWSxgvMZS1BTWpqApEUb6TMURrnjbtfb9HTLVxaQK8APuNWvstNL4SVnG3qXj",
  "key1": "3AkzRVwK1HJmUKwGbjuB7ZfUSwgV3P6peHSNZrDMJvQHTGzqzAUghTXYQGejC5R9uWCSQ2v418LKjZYYBW5BngV8",
  "key2": "61pTChwgUV6PjWPZWcWTv6qTp14v8jsiz4r13AYaUx7jiRRSXadPUj9xcc3tzJ52ebCJqL3mSDvPx65GLGvCtRnB",
  "key3": "64yp71jorj8UGW3JjvrbQDccXhkdzwz8Go9FB7Hk9p8QdML8iyMniCZGxfyjvrs579pHcdXN8TKcfZ1ZwyYvqir",
  "key4": "3RjuqCLky19sam8Q7Lk2r4PTXr4WwzdwB6veWnDxPg1ukcVVc5Maex4sZUKfd2JEq4VrS4vjPmjdGG8sfSS8nu4y",
  "key5": "4qXCJrP3nTW3kyjF5mkQbjQZE6erF9pZDqtf8FGqUs7x9FLM3GgwDWnKStE96VKJ57GLGv5jjtWJ3GCq6P9xCbBq",
  "key6": "3WYSDWqVj8CQo58TWyhGDWmbb1yBNc7rjcTsWKYuiBReEpM3NHzJoiHmsSCkQgdw2CwBTdMWhYHHNeW4FwacZ4qU",
  "key7": "4j9TiYFNYtnoz3j6GWxeLySv3Z3NuPmUwN9QTpEfWyD9kwE3dDHHKWiViG5Rn21YtkdaCphPjheXw5BEtesmZp1i",
  "key8": "5cAEEo2Ddxzzp8RYZXhb9ARth7MGsHehcqMTPpe7s51qp2EspvfW7kL4KpVKAhozX7hmjrAeWD33bYzKUBqbWhZs",
  "key9": "2bQyQ8CwXMDwh39EpYXVf7gwgF15CBCKxCdnwgUkNM76iFmWETzbL4acwbRsKaksoXUeAyXLmmqGPtUaQZghVk3K",
  "key10": "3PnMpWRGY5iTSSmWKGFyZXqegxDmCNHob7Qih8m6Pz9pHyy1CmR4eg3XC219XbcZuG7dJKDHAjfpeLseJ1ZaX9nR",
  "key11": "4xiDRAgunxzf6adKUNVmn5xgVV9AfK1zqDfY3m6pTaqLVDLNHsJvXW4dkJbawmQ36xmoW1iQyK9QuZpoVZQRi9h6",
  "key12": "44wGw2BjB4FvQiDR8tENDK3AyvWbCsnCRCfGHwiPfgEkBEJfRW4j8vNF8dmYZSem64QXnHPxwVkavLPR9gavHFqX",
  "key13": "EbtusNfyyaxAMoDFuADN7zq85RKFF5NWYTNNxXJmaWpHSXLwyYs5iG1xrXber4N8bJWctM5gGDsCV6rA2XVTr5T",
  "key14": "61mZVbH2jgntrMpyPsArEfLXqDcHpVVdLCAbAcmm3i8rTFWHbf9EJh4EYKqk2VcM8xcR9SXykGUjTijG6E8yt3VF",
  "key15": "2cqKh4cFXk92sWcJzeGHr5CgEy8qMgUTxVnaM5pDaLaSm6cHmrgetFr1YwRLurFij1Wb2fM5t5K9h2apZvBZVLyH",
  "key16": "RB4n7MVgAvQUhtZVDtAokUTYkrRekU22hH11hbvKfxivJMd2sejKrzJpFjecYXQFRuGvyPT17Rx3zxm3z4AWmmc",
  "key17": "hi7176gUzLKsKRqZ2PczzfUaPk5qkkp2UNHNHe4VZJgWzVmM6SsWpFNMH9iVnu6jWTAAmTauhDwGpb3t8gAJrm9",
  "key18": "5X7oZTVehugKabrQuiAoZFoBL2a2T8wxrbHxiABXAv4eS2tS6xSsaHWPrLydz6f6kBbZzF89Fiby9noQEajhogUq",
  "key19": "3sSRbc83jHYzU4SvbCTLsUmCBypNxgVGzSvKA41XnuJsFJA5K5PATNA6LgLDWCRnuP2b3s9NzxE3DzQMfDMDyTbD",
  "key20": "5Uwrus2PJ2C3yeKP2Y8WYE1KXDfuavDaRDRf1Z8RE95P9CoiYsPdn4EJ4tYmaoYFsxQ72qeChznunzLtrLBk49E5",
  "key21": "5YU6STvMYZthuZcoiCpQASSadrWCopnc2Ek3Z8F8LwkRVCqPwmPkTF5kPfuBAQhEYJy7evzu8VoUAmRFEZmpFczm",
  "key22": "2VtozsYyKMQx5XCza1RTLwUmexVKaxq8aywk3Y3jBDwtTEKrfCqoUbQ1aQZvfCtprjjiFX6YUT9vqYwYhGGpU1Kk",
  "key23": "7dwR96Qj7TRHANrfUuZijFDpQkHPyjDvkf38TxcqMEKrpMGfMnErh6VzfZSg9wEiuQ6dt5DYmpjyVpkfbHZ25RJ",
  "key24": "5vMQMTkBhhPtHsv6yqasB6dkL4ZCxzz2zrkE4JvDLBCEgeoPiTHp8RFCTkgmtn19hpN4YzDzzuowoppzHzHDJS8u",
  "key25": "2msgXAQsMMY6KriCpm6hvETPCFehh5xmsKPdE2scmyKhadBtHfM2Ro7BeyLQZR5qcyGmHBgrFKjPuGMTrmtAwMnc",
  "key26": "4HQVTWuozPB126ojtdvzj9MXKPBSsE5Mm7xN9xyysD6AeAssR3sCURy9nvqMTmTWvhzeNo3TBaXYusnkRtfpoVzb",
  "key27": "4Fig91bQXzckhwN5MW25PtY2WNi5x4k92s4pxbAMQsH85dSnRN9TAcajt32w5r5qJjGE3rwnCi8K1SEfTboT1YRX",
  "key28": "3oGz3SwwaxxSGiivKK3y7Qesd6fE2B8AmgPxmJiqCQrAnweTd28EcVzFSWgjNs8XFJdzYvU9Lt5537vVo9F4MVFD"
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
