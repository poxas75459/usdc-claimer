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
    "5n7Esv7UhzGF5WmKEgc6aw9BSr7Z3NWCg1V51PdVmQM7de8oVPNYnw7KVxEeG8ugJER9GjrWs11C2CHKqW2SDFJ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zp5ZZpsbVkZ485xjiohsvkaaoCQkP43zdZLHDqehYK7mwWt6zmnUsmHMGS8XpoHtj2fwd4dVPRBW8zHmPvBv9L6",
  "key1": "n2FZQzMzfSivpgSxCKYpj4Ank7WSQKLngkqavLf7V2kxJT5BFLX3ZepPCxMEBSjgdPy6YjKy9ayAcBNRU4AncG7",
  "key2": "3cdjSGNBMpyqyDN34jaSnaR8yJiosrMVgB8S6p7rHTpbswPg29RnhAdZY5h5g8HQEuQ2s7EiP9xrEmqnvhg2Pfcz",
  "key3": "22Ts2ZjpzeYMPQ4TToRx5LLRsAze8Ay2meHMDucAtL6KX871F4uSNn7QtbBfdsTDtToyCioDd4jBNYzEmmtUp9LX",
  "key4": "47gUfnhNTJs2QDzdfjiak2zSJS4jwSpetikhVjNLYxN3LWQqCVJnoPAXzXhDW2z81M8EJtY7RgKkdNmraQrXJDaE",
  "key5": "45eegmtT8HDc8AxpuWruCo4VDJcvDQA25daD36ZSgbJbsUNdmS1KNEZyXrCjnC8bFf5Tkup25GhVJPdj9ASVjYUs",
  "key6": "2qs7NQqoyrpcpwasSe8tBtMTnayYGUaMgVw3AeV6Hj9mFPiehYfBYcTSLsHjcFVWamdrHxxu2NqxbV789CJsK4yP",
  "key7": "5RYCPbzWYJBWAPpBLybQH7w2CgRHNNwbiyMjARtekeThwLWCtBKXAX1wkJz1ZKAoon8rq7nrvkT5VHhGyrGpw4iq",
  "key8": "3XXRH6Eju2QMwx7K11kQN3yxtwL8UbXf55ijscvj3m6ZK75TwvUwvkWKNtnWYTguTuMwLaX8AAUjeVXuQHEwWqQP",
  "key9": "3GBMgVi1T7qy99m8XrAYquk4UDvaBuxN34kVnYxJDViLVo3vsNjZTZq1hbpqyDyz1gkj4Ma6kUF8ymEXJry7zoK9",
  "key10": "5RTM14LqGEEp69M77V7LqnXEqAhFrngpKSES7F6KfGu2kNHexXi68eWogVrsnYeeNBdCVVwHTxBdWdqjpuBMAkqc",
  "key11": "3zEMyyfXcWbXaMTR2ucXw2y849aURopUeD9fqaaqFbfn4DsSRxQV9weJRmmGty9zFqroqfSjM4HfdfqzacW3arqB",
  "key12": "5w5cfTy12M7QDG4JTbFSUwh5EZutfBgUUEbXZ7WwpQEdR5D7zkQMJuGipZ33nUUNyzGyWVySHyDfKknHbMeDsDmz",
  "key13": "3xo3KRVYvoE4LY4SwBLJhR7YYBREsBRmgTZR59oYmHGsMccPPwtXLi3yhmUCQDSYJCk5QfafYdGFGbFLFCCoLt98",
  "key14": "2oFnseDnQ1fdm2QaXC14G4TWgDqeNT9f92SPiV2bqfx357BagZmghLAoGA8nicGeFrsCeauzbMMMjH6SgBB8qyW2",
  "key15": "5pn8vYs3CV6EMZq1BEzz2sgMz7FKUyDpZh31jR5qDHVpX7PEMUg3o7h7HoiHS9Net9tVQfwtBqKxezX1GR9umapT",
  "key16": "wNr3BpHxuFJrPRjDgDy9w8iZe2gtzgUMgbVRkcFDZYRS1yvzd1Ey8p4xNseD5t8637tRghspkXxBrSzH89iPgFg",
  "key17": "CtQr8syGJyp47oC2GJacKxNdXB3x6ecS5QEBbgJvX6BHC2UqujkMFyP3i4ZjnRTFUSVYnzE47EWgJe8pgpA7YrU",
  "key18": "4CTsVSRy2wxJArQp7BWG2xSEJuUXAgwWMMiwqfkpWZ5TBaAiSgXVSrHa1nrJFTPXLobKoPmz7EqcdicooiqZ8FKR",
  "key19": "L57fJhHdZ4m8pYH1kCsWuoVZ2dr7UzC7aGDCfKUScGUXnbpBHc4KZhpmHnKRKy54UpHJGzpuUKvhkKk77iCFh6v",
  "key20": "42D9pEoNxSjxk3SKM7FWqhfcVhgJ7wVH5vjjeJUrGPVZeE5zHfYRHN7wSfvinQn9tNMYzbJDac8A2jnSFZcdxtmQ",
  "key21": "X85kqmxxkHZZ213vhN81BVxbtP2jmHUwpf55zjw8aMZjgkZhe4Cfe4Vfieskyxyx5JtGnYyyf8uCgNvTHzsj6rz",
  "key22": "3T4yzQnhXcrAE443rHBfqpvVHo4tqnuDgefuohCH59RVU2rM9SGHTDb3gDCJSAur8nFVpPUTE1cMpWqyZvj6jtPX",
  "key23": "33ZevqdEa4RyFg514rpZH5YDNmXkv53fitvgZxjojS72pqEXDrbebJu5piK1j6Uz9qZTDqPSdPUPsLK6QZiL6XRC",
  "key24": "4qqAatpKw3maTidxt8FywLKKh4ECfvWyYmP7ZB33m7aCmUQmum3vpFmCCkfW1L3bXFQqKbZBkAxvQr5AVVezuMfv",
  "key25": "2x1sPdPH6mpS3uXSA7WNhNEv4T7UxigRvBCkGguAdk1dCUXZjnEK8KYEXQZpTRMfTNXPe1euXnxmMDrNNN4WNxTX",
  "key26": "4oRTVZhwcis8REDSAbemaxR4BviW5WAKU9dRq4nY1QmRiH4sJ8ziCWnG7yRdwKmNbbTNjby6dTgjBzAWgwuSiEbi",
  "key27": "4KRL26xadYNudKC4uA1fneRAYkKFmJKv29xDZr7sK8upT1zSZ5u2k5V326Vy1Q4RubCAdBrArhNG8u5Zqz9sQS2F",
  "key28": "uTxf1fYhxB4SqsTAbkAXJmDAf6C2P9BbnttEGc36uDGP8eQcto7dnMD4BbKR5icSZqtvRHHscpKcxQ1tAZSuKpd",
  "key29": "resXQfLS6k6MjXsKB8JvBCoRpatWp4GJXaXUpFz9GgAxHpg9u3EsziDZVCKujKakxnRGf3E7cauqgVHJwqQXGf4",
  "key30": "5wtLeGe1XkAoqNZbt64Lt7pQmnWeCV1fdfDtQv2ENb2kVgzFHGPvaQPaLdB5qnn59GNxBZoMcXrumjmL4RmdfeCC",
  "key31": "5z8BC4xzjETYMvQcwWmyTizPY4gkXGJ5aMVBppcRbiHKeYkSAaHf6pzDcCc5LWrurK81DoXWQA9TeCTpk1x2C6e9",
  "key32": "Rrqq2YszwNHbDZic5r6uqZJ6qegaSc3aTvsUGGovxNCuJqThiW76fQfWwJmqzoMi75yiF47LCsAK5nAsuyQ6wjF",
  "key33": "5vjsLsGHdEhrUaYHNnJdsgfyZqfyKfkqafD5X2HhMmsVdKggWtQHZR6WFLjRPG2wtPBwdW6rd2v1bVmF6wxVB96n",
  "key34": "CDXk4EYB1NZ6daR2qd6ix1BmeXBnA13ReZM1AXxpUKeX2mnmSt75Dr7kG17sKH5Yc57fu2L6X8gyJ81JnQsCqTz",
  "key35": "wFwabmervQ1FC5eZi5s9yF5JZ5dYVGsGKhQnbCD3Ppe1MC7QsdNQ7qMv4uaRicQmRvt9R8FwDTvysQzNxhijrPK",
  "key36": "3vx8oShPsM1eGy2kk9CHndBg4Yziwi4SKWeQn8hx3Evt93ZtyWRHnYCP7zqg7jsKFdFvHtgoHRDMyFz6LEUzTE6u",
  "key37": "2fZaX1PFMQDafD2kHwoJNm43AhRAss5eW34iUaV5h9UXJbnr8jGqanMn8cRCUx9T7sxLrbRkcnMDBtjyFsQzDELt",
  "key38": "4jWpCEZUircEydBRP6obd9Bv6rksBm2K3KCY7MNeF9BW3yu6azdNit7RQCxCRR5h4THGuGX179BfV3ZTVbUpMZoh",
  "key39": "3KExwrTyx3PEzRCRube7qY1VMNzARMXbsCvALJbLvJ3nR6HZjL9iVoL9RGuT9RAD39ARYKTKweTAKKtw1qSL8UEd"
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
