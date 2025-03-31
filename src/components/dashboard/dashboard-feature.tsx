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
    "4R3ctKRv2FV4TJR9DXtY5SZuNHvoCDzMUkKR6Q4SGUmEmX1iRawHB95vfsZr5aLgk3RSMSBV4Znqp4yj6e23Dnaz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FK6GXebKyvD5KRjbVJkLyJYkGNw4nBoqYmbmutSUtxzNp2HrXH6PLx5ghJwFttw9y7jK4eUr2hBUUytPG4YzsRh",
  "key1": "5xncc3JUDvHxgkz7PrgR4rDYf3Jwm73eWmvNnw889HNvbhX2iLKhoVwXFCN1T5t9v1FSEeXBCnbCd8hNZvRtYBu6",
  "key2": "5eoB2cE7MjAUfTKuVyHMsxjvrHVMuZJJfeUjta27bo5H7BrnrZnvBVFpEeyhXCerQZPMth76n3JEUJPaH5MzSohP",
  "key3": "3JoLdNPF9gTZbsWphbXSBgdRqB6sF5TdyidGhqEKjuvzoeVDTJWqGcmMT9GLS2TtajGtUgzmnyQEwg3wNKTtHcbm",
  "key4": "5hnxx9au8etqPhDhwhV8UnX4k5qo7qYdyyaoGkHnTJQbxjPdWc5uY8r2Nn4AjAp3vHRFSzPNu4cTKozKYAdw2sxV",
  "key5": "2g1gtANd7GMskzGqaHJ5XYr2PEK5cBNNBcsN57Lg7o4UzdNkp7A5iKxwLNbgXS56H2brhqoprrztQMjAJwzbZmYu",
  "key6": "3gU7BQfKrw3P5P1NBTS1ohk8n7E3YfivKYDRHUMqCUDZJGpLqRNiQdBm8UfAF7YFC2SpsJz7YaUuARTgxLnrXEuU",
  "key7": "xDQAQnapu36Y5GZXPyNvEtAajZfVbMYpkpPd9Bpf961RfBmwZcGb75TAgNap1f9WSiVgFdmjP2CXVymZkbsUq7N",
  "key8": "2CqZL3TGT4dNhiNt7sDMseTQJ8os2XJYgh1YGys513HT38N8uWDbY3mxpY53KvVvcQKQySGgGh8rqT4gXHLxUkMA",
  "key9": "4F8Jkf3VpsgxJJSEVHC9hYoTG9wg693cMJYxVH612WtCcJwTbKdfPtU7jGKuGgzFFcsufR6t8U8Ru1RLwYqzAvkc",
  "key10": "2SvvxPUgAecrkf2XjobKvqKRiBBjjLZgDohREivrGzfARQWLvMAucXukDtUUYELJzPBVHPDyKMMRaYDhbz4FVEpr",
  "key11": "53aV8NNsS2BfacqhfdcmQhKEKUb6LtHMouqgU6kdUbH3Ro4jy4VA2Cbn9sXzJ3GbCYmbyfNJekeUSxX86obMKNwd",
  "key12": "4YrDJYJKXtuKcCtY1YcfBP1G7G6b21jfxtkqNqV3MocR9JLsWwUiYGvZCFyN2ExZcGtfJrvZexEA8JkZFzuGEo8M",
  "key13": "3T5xHuwWarTcTL3SBS24Fmp1H55usVpy3GG5wa9LNpWBspk7yUcSeiz6xUCjepMk1MUxShPdTUSCimzWUXpRjYih",
  "key14": "3MeeKAkzAP1ijUfHs1qvP9N3GLvYUDq6k9Gq7RJ5DbEqyHZhKqafgW483uanWk4tfmuju3nAWyonnpcH2szJHH3Q",
  "key15": "3mX69sRHnbCLZ52Zu9h8wioMBdLknDZZzkTZN8E65g3ZUGVm6qGEDtuskdSAMB1Et3rdJChXgUGGBXGqdASV7Q23",
  "key16": "4hpNgbB4aBEa45aZEfdVtXNkCKUFVY8r2fDwsR93ugEP45iNMdmv2knnQQWc6eHYhkL5NWgL8t4b8NiDxXcao7ui",
  "key17": "5FSSS1xGuPHX5tww6apjBt5yGUmMYK36DXN7dkgSF85KkSMfZU9ofoSqhP1bxJ2rdVJV2PUGdcmFBQPyQjoiE3Nf",
  "key18": "5G1BP7PBVPoPEdUiMEBtXVTbYrLkKtH7xK8qHmcnVzsMX9xrkf3RdxdTMZNAn1d7ZKQcYSPt3BGJ3JFePrqoWF3A",
  "key19": "5tnM4GF5p5i16zY9wWuACnxkRRdysDH5fXWrQFNo74mjTbYaFZmwakJ1nYfzMgf6AKuAVVUVRrAcwuEYNRXsQJan",
  "key20": "2hfDnhuGxQ2nqDfUQuCctWtwdSj4Q4h2NM8ia4Q4mLPGadF34TL7sg52dnnPUdzQE3i7GBkd3MLg9iZ1X7QphLTp",
  "key21": "3YxvGvpo8Wnnc2VrSh6NEVoGpeoc5VGgncjucxXXVDZFv1sj3V6hkEcctUGBXzMYWD4Wzzo2fFnXy29gPDW6xJkL",
  "key22": "3X3QHirgruNtigDavH4N2RXXfNBTNoDTLaA6t82LGxCo8mkee2pe7q4fRnQ8gMvcYYCBnv5feFqiWUi35v9veNv7",
  "key23": "457raM4knQzsWzHiYe8FeY1VFfZ9avyEfAdVAFQVJg4tRzPcFZTxTNFLWFCpUNni3hhXbtP3qsx89BUgy95JoRWN",
  "key24": "4ZF8uv1i14aJd41RFV6pZV5Ps5M2UZoUQA5Sw8Px4n4qjP9tqH2AE7x3uYvf5vdZyaykbHsWb7ps1MKH7YuVpZ9E",
  "key25": "3HQiSSqJyZLbfmceQamotfrMRkd3RXezz6zGAt1PZiRjKJrH1uVeqePhv2afxoTNSDEgiaDxTwt7EnJgpEZi5zBi",
  "key26": "MX8yJahKF5oV7wc61jWYq2G6YfeChFHvXkV4jQJEFYT4bDNFsLHmrGhNQteKJznQ4eKdrhpk6Re1J91kKGxiF8p",
  "key27": "3d9TejB8LAmqxXCVGgQ5Hy1z886ijgRqLR7UqpSramuuPurPuknweL35vSgXBiJpG5aJ3DXUYGKDFViH2RREFGwq",
  "key28": "m7Pi8f2ZegQAWejcso3ezBZdvdo2JdRR6cQbdanLimQztaEpe1cmpy1VUtdvagyuYtQ1YVSWCZuvzD5mW6wwyeS",
  "key29": "49Ek2MApTwTHufezLhZTjWBbhYxyBMTzPPQWYuKvwL1BirerxeffzHekoXha6GtxYX8PaYRPTH5qe4KMAQWKhfG5",
  "key30": "WMvaVK1WsNEfaSKQEthPryhHurtgARAcdSPZRwgxetHpzQpf7djjvAmFpPVPw2WUR2FKCdaQvgWKkW9SMaAeaPD",
  "key31": "2GcpA5ZGbwNA6pcU1EzrJW5oZ9AgzKW8j3UhaB52Ho2J1eiJ439Y5p1bUQwPsqcJ3hJVVEAGmscPCeQtGXbKCGgi",
  "key32": "CoaLhz8ZnoL3zAq1QZZu8LmiKSfYYxkUkyLXfhmnTuFZEczaX1UE8EWB52aBg2bvPe5BuT2isPDeFP1rZb5uTEg",
  "key33": "32f6Dp3eHKpgi5AjDLsovRUSBn5CEJj5PrjDMPQK3Ca39ShsStazXtfxm7qXS4KuNPxnQLzLWzMH3znetahXeSG5",
  "key34": "uNYerVQFyUAAFnRAsMH5JzkeCpU3f8epdUJZecUrFAb9UPDXxxf6dhWB7oDSSTFSatG5WrgijxQyA47n88XAP93",
  "key35": "4mUp2XSB1652YgnHv5wHstUHHHGfDPdiA5aL6HFv48vywmibyFANyQbHR3NoE7bAMwo2mBudCKQ8ioF6zJs3joMa",
  "key36": "4YRVaivYBRxAcRWTvwwZW1A8SXsTc8q4HxRk2a9B72bNvsannK65a2LCuiVFFeNc6iKdUvF2vhL7RzqBkzuKtyGX",
  "key37": "2uiuxNcahKjs7H2cNhzaQkcicsX1BjofUxshii6prUb6osQ9X63F25uTqnMtRKAEQ1YBz7shRhYk3sCU4Y9zRg7m",
  "key38": "5FXLaK6e6riet7f1QTYJfiXgynogjxbtquLz6r18JJoJerGE6LJr27MZbNLmbNwnVFT11CHgQDxQDc17mGJSS1aK",
  "key39": "3dvBYFDh2XTEiRGdQisWmLLST8grU8ay52L7QcfceXjmwcbGh2oBRuFFbk8ff3uzimWRyajKZCYqsJNpDS7h3HvD",
  "key40": "2HtkbZmiz3UqP7GtakkgegZyPDH44NStV4GHCuTzqSFBME8KYQ65x12YAmhkpgWgB9pK6hBcTqQsDsMAGWdCFgr7",
  "key41": "4XX5ZfPmpqQwZWjd52oNMRu5Hj8VBt2G7Pu6cUMDiaMNBjphifwn2KRN14avv3aUSCmELc58CU2yjBhLVDVJtApN",
  "key42": "3QGPRo3AQWo3qsYex9up4Boimxz79BQZ86idyXipzVteRq9bKh6chTqWo69E9UQnBtSAiAUnQWFPdz2TMTR5r3kg",
  "key43": "3h5FiBPKeAgYB2igi4nqraXQJifutabHZPcXF6dcPa7eM5tUbt15bH2XGFgytDt4aGUXXriVjEGE74TF2VNGqFQP",
  "key44": "5PURYQXMnqkvJRgugUcEGQ5NZ34f5Asg6ey2PAUbuhzyuH26oMEkzd75zaoP9WuwJ9A8gSCuhzseB3bHx9oemBEF",
  "key45": "3PfM93hTJeTyAXBpxr4BWt873ykgDyrhwRn8H7ef9DQWXUZEUaDEDfB8t6pk1VR7wC8YmcaL5GrMWfXRC9hvsDfB",
  "key46": "3YK5MnCfFkYyuqp43NCYodN5NTEMRhfVa87uNyCcR8sx5B8C2xVU2LNPeHR9vEDNhp2FFCxWbE63w7cwXssa4o8r",
  "key47": "4waDUoWKC2ser3XT3SY4acf7fqS8xkeYxL51UQxUbNBsDXNXRFo7t6xexeZ3uaiWfGo7KSPnU8iY6jtZqaMWMg5r"
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
