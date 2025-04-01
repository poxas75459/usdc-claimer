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
    "5XLQGDLuFGRcJUfyss3qVevmxk8ehafReztc42pPGSnaEjovRT2RXMjza8xTjdboMXVouqfjMf37dArRr8K9QVoW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YUxRngHqTx9wKg9z1L6iCdWroKN7uQvsPyfDAQKcSJrYjGJLR3ibj5Ysuv3pov5PbLDyxnVdTF6k9WEEwSByFNS",
  "key1": "Zj8sSsAVWgwbGJtp4y7GUZyd4uVtzvnijGxVBwmZzxqeZ16NDrge9EL3ESrH5uBPbExP2hcqkRAqzNumUiwUbNT",
  "key2": "xr7ymi1hoTZnafrLdWFipVy6cQPrsqEJsGwZCBPFyEbvRGtyhhL7yUwAHFQDVBDbFqGRteJUHQxr2eEV1z8ZxQD",
  "key3": "LSWofyisjLa85gKQt7upjimiuibiDrpn2oJRhRKYXZsPa1gSEGsMRU4r1GCPS1iScWYv6fxeRUEWwmhYp8TpRPx",
  "key4": "3yQ2bFuRhbHcVXkCmvrLskBjKmPq3qHWgBcMwh2vr5v3nMm1THmwjwVrDziRmTf8YAXnvUnqK2EuwYGCc5aK6Ns4",
  "key5": "4JCpTTNnMpa4i9QmEQJHhQQVdcREuu6PUC61gymeLpZgb5yxTjZ3Lqu3GbKdRoBoMT8UbXQ4vrAo2z1h8bBBuAJ1",
  "key6": "qei6tAbmtDAkXYJ9BRkYs3zxtnk5i3UrbE6e2xyhcgFoBx5YxSC9xve6d3TiPD7WWcQJS73erpDiqZERevcssM5",
  "key7": "2rDHfC7DEMjXTcrFm8M25EUiwaiK1QkTYypTRim5bk8Y37tr9aJuexa5UStwBBUq3uxnF5MZD8i34A1rytVjUc7G",
  "key8": "3MmsDZwK49Fje5EoUHdgDA2cQ5yMZYHfbeBJn852drDpkYMST7N6XCsHtDDRh5f4nzFEttfszJJyzytGezbYVgY2",
  "key9": "eDUtftnVjzk1yE3SRJaHuMjM81R9hvp53qVtSkokKtmfekdgfQUnWgAy9hkoTefNu8zVUyCvgbAestSiGu2CKmt",
  "key10": "55UoEv1dssAuVE4SYbnHLcpzCyUEL8fMCwqZ1dCSSDjCpcFRfvFQ4nM7fHXKB8YEQKKqPZwNt4BWpqB16yxLdc1H",
  "key11": "2Rtro84uu8dkkijB3b7o823se6442NGY54NWegNFVQ2mjeeq8hvJpviikikQeR23EGzJwMeMNcRfFEg2BQaxmoQe",
  "key12": "67o5N19BBm9sUFE7EMjcPs1phR6Gv3dT7pCesgZtkg7e417LFKWrZXYF6wdGH9t4wfqun7gfZQc4ArMi81CAzMNa",
  "key13": "5KYKncPzmHhvbmsQ2y8z4JifM3PNMiCZeJ5g7gwD5V2z1xxbQUS1QtoNMniFwSC5wJzyRoJ4bXTDJQdu5JgP68Rw",
  "key14": "3JGMfmv7dbJeEzZ9U1aJDZDZsEYhEKRSNAEnPY6pKFA4tpn484LuNSCgjN3TMLCefAWcNoGqwhHw51Uk7RhVaVj6",
  "key15": "3RrWG1TnPLiHtpYjW9ZuTGAo167rKHFTb29YkQeDDEFjvPP6XzVnjUsTR6pzG8CBp2rzyBmCqrtspNTA9TbzhKnd",
  "key16": "2mpwg69Fc2D3W3z5MzFBhBDYhT9iQ5p1b6YJzhtoP2DT1diV8j2JuMHJXzFCSRHLfXm1bGW6MWZPhEq2XJTAHNer",
  "key17": "3yyE4QatFqfj2M7LwMKXTDk4JhidTM7A3o6oEW1ha5vG8PCLjNbCbHiwN3jJVb5PxYk25sJnuyfNRkLetkCkkWZ3",
  "key18": "42Sozsx8WxYZNjhe1Pav8qoorePjCEUx7xvkDHpcADZ8Wq5SP2xhTUXMdPh62xLYqVUqrcdvTnECWiJQLxCFV71D",
  "key19": "2Rw8uULvhzKWLC2KqXY3FYmCZMPxf8qALxew64VwgPS3rPS7XQfVVasPH1fwRAhpU1TdmgheZpPLCEnJxF5vpFgQ",
  "key20": "vEwrPLWBucodeofVinpDt7jENdsbyHzeFV2tKXEZVGbNFNhE4PWypBQxi3zSjW7jiRd2Ndz9cNBcDoLkQnH2qd1",
  "key21": "5DCMPMKsJmEKAqBitMB3Sas2265pJNaSXjia5EsGMFLGUAonLiHYXv9g6JJty8u2wGCwTUexuHJKkJrbepStMMkq",
  "key22": "23PnCTqJELCqpozaLLPkrwH2t1Dsz2m5BbLwb4okmeBoepVA9zRXKMSR5UAM2sA5Tsexf11xAgWnuo6ACeDmfR8L",
  "key23": "4jo35p56wCn1R4JXHaKvMxXBDfx6jBhXrGsHbcQqZfuZUEFXsafRYPkvcvM9GiEL4a5pojxXBYFvh9KwWienqUWx",
  "key24": "4LSwN9PTVzpSzPbnX6cuNG4HZ6gotqZ73dpcUXjo9HggC6zQvkP3CBHDGmFPMYD2zVy4qxtDCB7DAsVQ2JFQD9uH",
  "key25": "4YhJCk8phUmFjznkpUAixhYW1Bc7tbsHxxSP8i5uNJCjyaSrSWZMNBt3dJyzfS99BgQsGAan9DK9Fw9uYwV5Eb5F",
  "key26": "5TVdm5aCD4FdT8uLq8AfwMkGgmfi8uVPmKFADDen6KC7DCUWvMj2t4SuPfjmnRVEWrXebprHLpULRb4k6yA8gqmD",
  "key27": "3JeNvURPPB9JVw3B3Qp61tjkMvhMNYudDaEoWRQHEnZe8PnkshPPiEEouhSpri16k52VZhDfHB8gfHyuETJf6Hpf",
  "key28": "5VVCqk2bVqEuFR8BgkENC4UDvpUnVTgNqzsYEJaoru9tuBJFqjwiTTDsrFrBc4VkfccB97WmS61JY9kcHjMZmVv9",
  "key29": "126jBgw9R4meoBRwHQ98bbwkSBZg36CoAcJZNRKRcUdWqVdSVqci1E54RYmdyeCmeRrYNFSSsonpb8Q39LqQ5WMv",
  "key30": "2GA2ir7r5riBeK11BHkMfz39wYsj35cCJ2scUL7tF4g6bvufNnmwJFgJeFnLamKoCnxeuoqcFM2YNikbXEEv1eU4",
  "key31": "3VCQFg9FdrtrQNCzBWqkpzhJWSNq4u8TS1bNpAmhL4h8eM1yRoJ43F7ZZLkFonh9r2wco9AY3dqXCBobaTakpXvZ",
  "key32": "tjkjuMCXwqMQR1anpTEhc9kLMZceWqZcMHXQRSHvUc5hZ57Qo8DXJKwTLHdU3mEUUNdAH55hq4Y7ek3bu3JVwub",
  "key33": "5AwsNDjB1hKp6BTy3Tr3GBy2cmJpG7k28YDj1EfnRmbuM8cst7MWsJRtxkDiHx9KBxU8VbjBEXGB16AdMF4aawTJ",
  "key34": "4CNcUu3rAHdq9cfpVE7N2DW7SgnFjcYvXY2x8w5YbpHssfrm8B3HEd6sys9373R6ysK5DnEzE8u5Kk6Jir3priqu",
  "key35": "5of5VLwrCQSbqHgQ4fKoAqZsiEPyjH9fzAvqzi1BvzJDEeMtcx53TqKxKWYnD3FRzGAKwAECwHrAtRyzk3L3SPmg",
  "key36": "21jQ32oKtCVbRfM2NjVA3QQc9wBAEuw9NqQfkaCswBZiVonbToqG7LDV4hTR5jdVm4cAtdT6oSHvu5aqTLZ125Gn",
  "key37": "qxGcQ31jS9KZnvn4JmzFUY7bLboeYcFtji64nv7xw8svExKUeE5AGDqL7JsaZe42fwP4i1VBqFuppGyC1ekZ1iV",
  "key38": "2K2ctK9wRe7q6w6g1pYTH8EjQWfn6gi6t5nvZJMVtssfjRvfPS7UZSAe4jN4hGgkrEvQ16qrQoYykRGAdKJTB7HX",
  "key39": "oy6aZkcAYsphM5QqsMct1wrPFgjA44GX5QRD2GdpxNDcQ9mdBogBNfYnzvj6VzBotg69f2QJLVL7Hjs43CqDJM2",
  "key40": "5oEwhR8kvBZBs7Rjifs4Lv13SLPFCd6Ezv2UAKhvnQMPACiu1tNR1b4JSbiuuWF5DUH956TYqA1PewbockRfRm95",
  "key41": "AWi1HCqXaa5JcWYQHD1H4YqseareJSEhT14Jsfe8FbQj6BDjnJWxMk8TVvGZLYE7dSHqkFsV2STCxx5jdDfQmt5",
  "key42": "3dgXQZLRP5tazjWop6GBR9JjvCb9f9NRDWTTb6yQ6SxsQwgQusSR15oEQpYk4fjdDvsqmxPogdE3vwxiPuG2dL49",
  "key43": "368q9HTujNqiE3Z1Eu7FVcT7RcJqBjSv3VywaJzxMsKDLrVQUx5AsJrbwd87kP1xcwpd1kRcSurQ8Jpvf7XUnBof",
  "key44": "xqg8h944MohZuASa9qg7kzssAfoiR8pANPXo3hb3jSj1tJjccHXAHG63RuaWWMQPbSJ5HpFki7myDcFvwv4QZ2V",
  "key45": "224e4HngY3AEqJNQpmHEGRRDRSTkFFDCpbQbhdXKJ2Qt37ECTEwTBiM79GpULKk8eYLhKeVQuNdhmXCzgpqcN4Px"
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
