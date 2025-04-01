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
    "5tKhxrHHFj5LvDi8W8sEWxJnkzbJqTV45JFfqttMc4QGPT7jYtruXTiAQtZuwUiNx1QUKVFBtDUCCxri8yfgexJD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wYm5mh7WmFgDmD7R3bdP1Af2R3esiHRr5BB97wqWdumoP6tWgcrsJGbwGGkYp4zoatme4jietoKvxVLGLp7yMLN",
  "key1": "3Uv851QpTdPLiiQayL76nyhsnTD4gf1tvXLtXH1sMgYQJp8hTwzkeRV1wX6ME6cwBZhqfSUhGMenGRUnr45qTGWd",
  "key2": "e6jAq4TY6jvmgMmv9FDUjNHihuaM6HHHureLCPVvXeRJvytTe5ttsE8Dk1WCASxxQmb3UJh2ET7s5iYGKzhh464",
  "key3": "5mxAF6kTspnJfzkmcT5cZwSgxfwuqtzRgMpawDBo6FSEJ4a2xmykvEdpUk53mfjQwNHctofPbfELwUTXhVssop6v",
  "key4": "64Ni12b2y2evHrPG8rLAoeKmrSmTGD9VRaisH6mccGj5C1X5vfp8hZhyWAkctfQh2NKbXeyFpkUQ7AsyZyz81GXx",
  "key5": "2xfmexoLvegif5zkVhdpHhGfBLwKu28w8DGVNPDnpNdWoSjF8a3bNPdsQcMtaq7GGY4GfA2sr71sGJdqkwx5p7in",
  "key6": "36Uw5i4zxCX4k1EH525XNPbtFfjBQ85xcF9nUoh5vUfdMPVXCCYTLP9yJbnJdRt9V99miZqeqUb7h1cQTGrVQg7P",
  "key7": "YwtMMMn3o1vrNWYv5EetQLtj3mYJf9W9BwMcLFuWUF8XqohvFx61V66M5w1kiky4k9iaQdnejvyCKEM5cama5YZ",
  "key8": "GCPxVwDbPBbZeZqRxhVShaZX1LA9F5wZoSXNmRUoSgefxfqcYsDQgC1tuiWpkPo69pT47jb4Mb4HTH6v8PRjnGi",
  "key9": "4zhA348HqhFArTqUCtGHbeyYx5c6mPPjDrELBNMSioc3vezuN8H6kA6XvgmwziuYPRhEmt9txpwcugoGxRVHmNxy",
  "key10": "2vWAdg5Wz3gpLZnUV8FPJ1otZoRiyFM4g2BK873Jhim7Djs8vr72xCoeJfHN3p48gGjBRaYtqqmdwor9exYeYBxc",
  "key11": "eGVLB8aW3jAxwdcUTR6SWWWYy4R77Nd72Le5G5peXkYRHiJHam6Trn1YwVXUBu6fipuYJjCFfnwN1jVj9v8GrYu",
  "key12": "5VbpP38jPJWvgGBP81FLmLw6ux7EBCBdhV1pS396tijffSJdsYpxGnjPfFaxXRL3W5GhHyteb2Cg5v4Vebx7WxRP",
  "key13": "2uxkJuVxDBBVZXTTwpAiFbvN54mhYCStppoWewJjnzk3hUyLMNAr14s5D873QqbmffjJg45sLKb8gprESsDRtAKg",
  "key14": "3j3YLUdWsWrtXKT2Z7RAy2FpqfYK5PHeQcr9nkpHBCXEP5piRfSSwDZWvk6nRiDiWLXNXEdALvjziYkXSgfFo8X1",
  "key15": "4D3VXxZCytBpTgMgLFCkTu3vhBtYcjLBujD42DZCSLGGNCGS2V1evUmZc581i99gP5x4y2TAFFidMEpxosUY9DH5",
  "key16": "2VssLNRXNrvu6jUrMJEQWmwKseAaBwqszZeye3mcZ3UohAmGvBKLaq47RCumqwzLsyARvN1ZJQTGEVTJ5iF5dezJ",
  "key17": "3zH8JuwmUjef99BNrmDPk4RTKyvZUn7VosRxfS4ps9MyaZsPjHP1YVMNemZjJxB3xWXmQfGTfZ6FaZqtQZ3ZcdMP",
  "key18": "58QKBTYxrpJQVtBoygC2eiVEi4uD8JbdgzYgXa2LXGu9B3isnAfMBjKYzrNC9VvcQdpyyGr2yyb5S6Xg1qqz9Xzj",
  "key19": "3cs66gctnX9KTtwcmhmLFSBPJx6S2aLYq4JyvtKjqTJE9oMedVbAZhVvoGJvuvjqnYtndTbrYUq2aTA3RA1Wu1TH",
  "key20": "4KkzWBJHZx78Z3QdXREi531bPWYRzhQBGxUE3V9TeVFNsJqjjkYdZEM1EWA4H46XgWxdat7wQLH6onzGgheQGvJp",
  "key21": "VuqqTDshoDignVfMu52QaJaQ2DoAsKdcjDn2kUNmthN7ndjAzDP4ZqQqu9VXXpYKHHn8uQdbRggAyt8CGMqXjxA",
  "key22": "2nqBjb9gMchFZZ1u6xygL2jd6oxcaBe2YnwRF2Pz22g34kYiyje77duhiifZqgdrq2p5sGzFqAgvAaiy1Q3gyeWR",
  "key23": "sPsKSkCULVQrjWRU9B23zyFkyWUtpA5Tr1pSZyVcJredaLM6K15rS6SrsgZVr34cUe5kqAxR7YLqBJaCrhQLRtP",
  "key24": "4q9Vp7NoU3prCd2NtMW7ER4ekiknf1xjz9XiYg9yThvYrf4QZWXsgoY8eW835e1iHm5Nyb8vDierq6yXc5Lfm5qy",
  "key25": "2dN3ytGRxzScMpus6NN6XqgzS2UXkTLHmn41q7NUazBfyunFdGBzDFDj9uWeSWgSi1swDwuMFSQ4mNzWzCXZb7uC",
  "key26": "4z6H6W7uUSsc2PsdaLa4ohAsR8aT7MHAAoYiimBnDAkShtGe2MZRDuebCigLzMCcFXS62F7ttSZHEeptGitmsPLG",
  "key27": "5XuuidTit633fU19DspbzSXFg2tvBBnZkUgmzzJpg91zHKDdrakbS2NagCVEBzfQi3LHMMaA8g3MmYhtyMcLxb8Z",
  "key28": "2GNdFZz94BrQ9LTjncxw9fsTFYvj3egiQqBrj3aNpuBK1kSEqCRZLBnGAisGct8hXuJuwNysUSKHxEyHyM83Tu6Z",
  "key29": "5NSCej8z2cTVu7kVEuj6tsJWdyFkvB4nMFcAAdzSqRsLwuf6QvMdXCydbEtKRTvyX7JFPd9mTmRtTNysWPkcHLoT",
  "key30": "4S7QkeP5hjLA4gJd1AxJkTbFw91oQXMTQYyUqivNKwkYsEzbAH7g3caHB3b2Qcgq9xX3xvMmJ6A8PEPP1RNoQ2rn",
  "key31": "5SD2ad5BXnwBEGK1rBtasb6igFzv96JETrt9YtCJnJyKMbjRntyFJ4jQSCe9fJBwH4sc8mqJ4aU6bjDqvrgwst5Q",
  "key32": "2Y54fJfbL2fLqWUdQK6TTVecdFfKrrjnHC1M4YxWrrJTh31s3eJ9ihP76iQNd6NWoGjTnmrLYsMbrXCqskndRJdH",
  "key33": "2qe8HMN3btCMFFKUX2fSdZDyBVaVDEhQCdfpjekoB6vwkny2gDXSWzBpnr9bkadjbPCCv4om5dUtyJSZBB5KKFTY",
  "key34": "4byS51eQZUtHPfEdmftxoaniySV1WzZsq92f5knAgSvD3oCzP8jwTupzm12dbMivZBNi8jYFnT5VHQiFjFGLyBFW",
  "key35": "4rMxqVuJtKhpnnHPm7szh6deMJQDV4Y1s3oNbhhEwknm5pcAAS4tb37epMMKpohMzTxknAzUMoFAMX7hBkF8okzx",
  "key36": "TVjaSAbZjHDQPjKRYVNDpisubxJ1qhE1kZfxk5A1Pfx9MZ7vTdK1KCADJ7ZsaT4rvBFiLzhPNE5YRueZt8Af7rM",
  "key37": "5VrfVfnTRQbGJsQMjETbzsH5TSqEcoMUNyHMvd8wZnNQx8qTJWekcPXGbU7norgM1LzYBoRufNya2offkWbwAKgN",
  "key38": "5gXbSe1MqPP5wKyqiTbWobDckBWhuWKHaMbio1eM5UtBmT2PXTiW3PNALbbUkzzzXgW3Lfmv7KuJEvefLhZPs7Y8",
  "key39": "MiymQ8SYstCTojKjEFgLu6Cnnbs4L77eNeMoNgyHTd92YAq7b2PHtEvee6fPF36N2n3pScLD2HFhpQffrdG5y3M"
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
