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
    "4hQtPdPK8Ji7v5wg6poe2tFpNJPVRf97PsNpr3ZukpvpJP4pGsBbBbVkeHgebbiAB9BsEf9gdnQLnGF7K6rv9886"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MfLuDcJQMsi7zFQjCQXQm7WUZptLu5mJrNLFp1DN5BTqKWTe6MjzxXCZEaZba3ZxTFTAiznTczqP69yjT2K9Qrj",
  "key1": "3j3EiZpXUHuogaXAEd87xEMrvg9jMo9WKVoDLsY3SewCNc6avNByMBu7ktptFzpkbuZJvCKf1E3TN9V2ndrtLQt2",
  "key2": "4vhfxi9muHhWy86ZNhPHpJbEcdqxUBdGei1izwrgmE7WFPZ6ELpqiMqr29WEMWkGcqEPU3R3zcQrWxGWfvgHypQp",
  "key3": "4APEVuHMCvqncPqSsWcaQ8LaGXUf6kSTdxkr1Qk6j3f6oaMjmqwF7zd9FsozSbjGcmfdjvDrcy6jjhMChfsn9yiU",
  "key4": "1GmtdcS5Sn6PM8cCKyMLKxmqyFhBsTa1ZP67ps3v5PuYM83T7cr5L9Ftj8KU2Mt3FDPaiUHvNvwwD9bVuAVA6TE",
  "key5": "4rNvQxfbbp7Sxone6HjLvCskQiuCP1NhZP4gvS5aKvsgmhECRxN1Akw1bqX1i4jT5eQbe9coFfXMx7VrHmZaYgKS",
  "key6": "ZcFBa8yQiYJcvQ4Fhf554eJoZXJw7jxpWx2HdGHzsrCfXPMy9hSLrS5G3wLKLNebjgraDtrtN6gJtx7bZCBciN3",
  "key7": "3dFwEtdf4WHaVx3A61T2hNArmGPFELPhmyqLJFpcn3FsJ3seaYrvRTSfYnMY4JgNcQBLa3medEp5xSVpzcbyw9Ro",
  "key8": "4nYasbWRq55eSpbvAQF4H31HJiE7UNff3ZQbC5quGeJSkEcFo571jNe2KUUdsCNRkW58CEcPdMb5oL3DmrUXG3Jj",
  "key9": "NiVsgaGxzrbcgPxRXqa5UA2xp48YiHUJsd9TTnFdSFYLESfytaKdTPkGL4411e5k6rXfoUhiURc2Uscz8T64PhB",
  "key10": "3NMnmrkxaPKo1DD59E1W9aLsd54R12JVK78ezdARqxDC59GCR1cV449qDUqP1nFTSCQ2hDeYFntpigWkY6y5Hjnv",
  "key11": "4Gd6QXDhTHkR4X4Cmm1kVT6VM6FWM3BjwPNzDhDWmLF81QiWatA3a87VDpeAYG8WDqFE1sxin9GWuPzxHYkGBsXE",
  "key12": "5HRp7uY6zMz1gpDgAirMM5hBSGMiWhAw4uhLDsPDi8Uj9RX2bBMFpp5DGCAfwsYmd9sTRbKK3epq7TbYN8ocNqMr",
  "key13": "5D7su7hvTbkfEZecpPnFZ4yUkLvaFa2cUtzcQsrJeS9qkoZM6DdHcSA5GL1LLEcNa4oRAhSsVyc9azAVN86rFzqF",
  "key14": "3qnhCshgrTDYP63cdVJLUXgNJXrrA1xL237enW3mA77MZPaKfqy77FNqYyrT1QU46aPEaNFyxV8hMcvMgmNmvd9F",
  "key15": "61vLZAUhopWRRvFrkHsa39Jxx2Dim4E9kzsMzezuAfBikPzpr3y4gfqtDek4bNQ8hPf7HJZkNz6XCzTw1L97BgpF",
  "key16": "em5NHuUpTPyRhUz4WDZvGDiBcKwAmtXswCt5yi2DMu6y4jz8jDyNFo11WLpfUhqVPBTN5bPd8FXF4AdVUrLNqMn",
  "key17": "48sSLeiTBR45qsc6161Hf8t1h1aLLufSgCfKnWnofJe2Ui8VCGQuTTULMWkqsSe8iqETxC6D38CxQRXEeR3kumEc",
  "key18": "4MQNiJ7zX1v2ufKPWUmcHVevnQCscoB6sSEAABDzziJ2VxuYMvTfs1miqFHv9EUYuZ9w66YDsdtwKjQxpRzMtkUW",
  "key19": "2zQsWATivu71xrjAqP9tyoUT6uBJ5a59psbAaTFsGyAunuR4ts4SLf6YBWpbsPH8gE4Q3nZEyTwCEshQRrqi7uMo",
  "key20": "34fPMXSVtJVqRRTW1jabDvBLpF8uZg6VagbdmFygB2dNkS3kVF6fBhyAdkZLq8T4KJmzv2USxvpAuvsBSvRmViF2",
  "key21": "4WwUX8LWxqUgwtvhBvkJPamspqEF48jy5goEZ1Scf1pkXdqEPXcBNjGAafZba7U1effUUvXRcfoSTapdv1orLsyo",
  "key22": "3ZM8hzFXiA1xvwY8NS4FGJ37zuMbYbe1QBXNAWUXuBCsvDbH2PMPtjhbYVG4mg5f3Z39FRhjFa7JYuKqdqUBYbkK",
  "key23": "VKY9wB8wpCnWDZibNpydqhu1exAtQHqtDHFH3kKgcaB4Zi1wspnCGYzabw6BqMRbmDCmzZvYX1bCiTnXNygfLS5",
  "key24": "3WUWis4MmPEDt9YKntdNtKpQ9rLj7PkGWtARE2BQ71xLeUshvwqU64yuvk2wH6KkrtiZy5b1qLicyHg8VU93abXs"
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
