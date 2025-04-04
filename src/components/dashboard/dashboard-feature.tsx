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
    "3EZb3a9bnyrEL1rvKpjFZGfW2pDYzXrJzXP4St5SoF5NerTRaRfiiaA8FWgzsvWeBUcukLnQYkHho3MB275BJkvt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LdNccqNhJ9DmQ3h4Ps6UvQZhytb9uzRofWFJ2UwsymBkquXeY9KsmrTiVgFXrkWJvGLhDLcd9Re78Tidzq5jNFU",
  "key1": "41BSiWSkVrXAXtTsxCGPPcVS4epYKnEajkvt6mMec1kDL2at7SooF6UjXkYtzDNzn9jpX3hpPbYE9M4A22jf84kW",
  "key2": "4JgnnmpxSJhkXMLAefmUxMXPm3Nyukc78QHSSoSE3R3anK2mMhDJtgh6hvp8LNCB2kdcdPXnMBDjU6VAfd46cVto",
  "key3": "28sxUTJ7As2vxNP2uwxmS3oj2N6saW2tPNymU5tu4AR48Lk4QtvYWAgVXf32h8rYMLJvtfm9EPyQcAH7Ark1zqpb",
  "key4": "5YjZ9eZ69VnAg4N9wWUUfMfXELfPm76WyPyVse5ANUeKxmFYd2yBbg2tzxWFdncVxVAEW1BN2AykknDRwrVeJgVU",
  "key5": "2CXrVdQ73FnWr4pRhiMDZuznRRxsY1XNKRdugQu3Y61ZpQfBUgZScpYgLwDEt9Ys8ry7YH6fM9nG83NW8Ymx8YQ8",
  "key6": "275sXjhq3HVxzCEwZgQzuKGcKp9zPnD3QURBRL8UKeGguRTBQoeYTnSRxRYKsRQ9oLsiTfKSwdUFRnWHZTRsH2mM",
  "key7": "3cybWezHXsrS72yvQQm1ZuaofdpCAZxhGiVd9RaqKxAq5hzZeb1NznCwWd6vG7nmxdM85yD81egFQvhvYZXqeFz7",
  "key8": "4HbBDBu1DopDXHaTQnkVDeQAuNSb5egsJw2kanPYQdGydWQ7X4Fsp2Lr8y8iAdBte5of7AT4fWCKq5oKyZMJx2jo",
  "key9": "3Pa4XnCtxiDs1Ur7UTYR8fXizvnzQp4nBXtshgm29L1ZsXBK3PL4yyPpmmtt47fjxcoXL3SJAQiTUe2ZhDbgm9E",
  "key10": "36wJv87uvb4xhanxrzK6pXubv2TZJgpi8CpgQzGeJtx3uwYiy93Lvphof5GbYfHB7HVtUMzQB8CLDb8MdUsrZHH3",
  "key11": "5B7GzPS9iwUn6hRoLqyieHPrfaSpph9qqqbHgAU5koF4RvAZntd9hQmspdbkiSTrQS6aWobe3y8wiprpAxBfB3d4",
  "key12": "5oZYzYtLZttXGRPbGTBHmDRjq4TKVPFmwxYuhGeaSBbGY3FcsETWcf6LRUEKk7k3NyxocJmM1CA4CxfgX9wqmV2d",
  "key13": "4L6h171GJJeMXNWDEjw9Tt1AQfyxnMtL6S5HG8weGJFy3RLHaEFAJmzFU6X2HXVBt1L7MjPDDwAM3G3bZrLeH59M",
  "key14": "3p1BB1AhDuAGhMw97xwUDEvSKNy2skHuzCH8oHNXmAfPDXwKiVnGg9hwnwsaXp5Bu7PS1BCMRvgesaLEbLsQ6SNn",
  "key15": "WrGdDFXdXLRvB6KgdGWe3Q3imHB2PGb7BJaKFB2Ns81BqwaUeszoypVGHJvDya2ghAoQythBb5dngsFErsaqR3h",
  "key16": "3B1eMCqhUCmuzuDbSsTrxZS6ehJPd1pDV7UdHiqaQoGGNy9Ujh4XicqWbrFbTXKoRmyKUUX3KpQByTnQ43baSdK2",
  "key17": "23Sar5ZTiJJsyLj5LVGQvKBhA7V8gkJdqRVi2WD12qDGXEzgFzHWeEJfSZUJ6JEPYJQeW5ccRtxyEgEFVc1USuhK",
  "key18": "3pV7zEdzkrda4MHoyenJ4uBRGZYpyTZSu3gFbCwQEdtZNoAfKNWT89xkt4Xzqc8f2jXiH28eSaHNdibgC5L7hbav",
  "key19": "4tFAJp2FjF6L2YDZCaS24tHXwf6ogtd5d3n7hYmFpMapVWMLE1m2uBMkRHCWt7Auiaz6DvujuB8Py92yCAZyLfpj",
  "key20": "32DnBiwDNzxsvqxSyWegmXLZVrUgaaRvGK4bkv9TmYkrQJuAJSM1H8TTuGmXUKqXx8ENGFnWZaMUjn1fK83VTx2t",
  "key21": "5JQdHfJC6DrFKzdPad34aFCQCt4agiZprfEFtPShubwZ86P6rRgXSzedPiUuMEQpkQionsVx7W3oNNXcmYjFBYAC",
  "key22": "ZyiZphhzQwxcLg22VK74KsoQtsoCfzYgKkY78HYhaBw9ote8YrhnoEVfpkvLwzu7KqKqrEs12XUMeeCGQPq8wNb",
  "key23": "WXM9H3zHCabcHcivh6SrR9a4P1oypHLRc5ZmkXzfiD79C7TmeArzvYpPDpHtbt4V233VJnSU5Dh8Ce6qhdvV3wH",
  "key24": "58TqZGhf9Gr8sphzwcYDcK47nuyUr1eZAkfYpB5mKchFTkmgkUWbcwsokPKmyCR6cE8HwH7iiNz851aiXZYB17Ca",
  "key25": "4JyttmB5pQp7GjhagzYERRFo7T2cjB78bXVbqEpdLzitNew9dCaeT1sEcsjm72mmQKizBvedEJx3Hxv63AbTRZqd",
  "key26": "RC8Bv8F5hLGAWkV5rZSd4UeXgxkqRy23ungJ1uQxKMmv1CWd5oQqZsCLNsMHkd62kt2cWbTzTpgWMT8KJRB3p4j",
  "key27": "32aRs3XUVb9RUwLi254ZBXot8szZgrV4wYDi8vxUhoEB2UwBe5BJ2cruFR5RJreUR8vs8Fm7xN4JpVUPENjJ1aHP",
  "key28": "5iThPGdQMfgPCtkdePHntnzzNjtS35xmm7urXvf5Febbk1NPyzXn2m7KJ432ns485A1C5a9qidm2iznGAK48x6Pq",
  "key29": "RTvjsMuUBqmLDfCbXFba7uAoQwuDNZoWBpBJ147myPb2GS16ig1LXsms4G9PjWoHVtendcu5UcXsRxD52HM7b85",
  "key30": "4VRuoK9eWm9dHWCzmw4KyGejcmLryAFQZ8attrb7VNo4ENdTzpLRo4gcqwyXonhbcNzbasPJYd1HnbG8Bkbs9kfr",
  "key31": "4GRRRYXpAuavKsx6DYCN4rCdfxZkhAqjHbnYeYC61J2GnDDCVncHA7G88kGeSmijKD2MWHgUJhkWya4eH8tZcFk2",
  "key32": "B4k9dyBVt5hhCniPE36zkR7QPs9iQ2MPwYh37fxd9iqhkyGsBrJjcjB3dX6ypWkC7J7nE3mTx4GzqZUNebCEeBf",
  "key33": "uEXaxpo5JMTsT8SR9bZkmdGHAhDCWGGFGP41YpYKcaqCeHyAjvrWGJedbxd2Cou3D6yH3ic4CY12cTheQTqEgpX",
  "key34": "w551vnPyM4aKaTa9XDTcFGbZkV9JPcs298szhUjp5rUsJKuGWcJoBJYjRWTAuAaPNDuthqMbHaJTbaJvdkLfKE8",
  "key35": "wt8f8Q8kDgw1P1k7YZAPYGaWbshtYLjQDDhuKAhvbKrDcK5eM4nBcdeXYKYpZNXERMwjyW4dq9ZCmgKHd9gNf3C",
  "key36": "5jnqrShn1EvKs8HzJ14pJ96nZ1wPwYEjGemCUXw5QcUYCFsBiuMvhv8zy9FdtQrG3qMMBuUup7wB1spwFSc3PYzd",
  "key37": "2DDrDQSsjPR7AouCHH6ztAoQhdNaTQMbeNQNYZnsnrY7K7ME4dDm4U5QACrFNg6gEr74Jyr2CFXfHVpV1d1Q8VWo",
  "key38": "5P1Un2JnPZpqPEi9wJywRqAahmQiS6PHxEWRDwPSXCmxuTiEiLVFiDn53GFDK5H6iA8J9jsWCnNKp3ZGGrGivkP6",
  "key39": "269pobNQLRRzPBnjjryXhen8nJyVRMSg1fkM1m4fM99ZeukZGcXsJMpPqzFPxpArZR9yAwawNexZ9jqan23jGUwe",
  "key40": "2ZkgBLTGdeZZxVhQmVNAjbBDzek2cfJPKgV1QyfMzFSyUWkZ8hP3268kLFa5E25ZBVuM9ptLgLU6jtaYgStYZHoY",
  "key41": "4ESRMdDGbgsmCqJWAFBPvKGHb9c1XyiNP3G2TZZ9rDzih6qwWJsfADmDYAHa5rwU2wEiz2PzcvTL8w1M9bepHR6f",
  "key42": "5k83Mzuerb4Kp6RdNGCqUkRD5was1cfMmsdCkCLVUT9HcUWrNieLCApUhZfcgJMyRgmCTnw899zUpwY7aypm5XMW",
  "key43": "37jJZXEKGSttyrBZUcNpidN6zVhchZd5ZjcuNWhqk85jkMuPbTtD4mvbKgjeL6RMMkms4mxmNaFrYDgybkDMvD2u",
  "key44": "4TbviivcsenYvawyWubWRsaSSJ9AvhmHHdLyXDGcpbzcX4Cyxwbspia7qHWJKjXZDkAsYdtrSGGPLYn4ZNccqgG5",
  "key45": "5ohBzTW466GGUesZawKKH8HHouKpj6vAHpM5Bk9e6GX6pgZrCRNi6po8qbQuZh6froHfnnpgoRLbqVhcChuMiiPv",
  "key46": "4kSEgGRX1xHxdMZPmvshL78RVBZDzCo3XydMH5EkhJgF7yY1BRSwz2usDNaG5ZEPRroUJhZBbzf6wxU9rEH8tkUm",
  "key47": "2YMYaR88g5VmFh2RpX3akZ8UY2rHWkm6TFYYuzfCoqFtMWLXSP2LukH4eLKYzy2RcTCEeMahKL4Gcemgj9VWNwAr",
  "key48": "4hTpdPWXc7DiNCYQTHW6XPMP7uaaHrz6d4pCx1pe2wt15N6uKwry9S743c9qngTWuNJY78FaKPGLxrwZ3Bw5WwC9"
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
