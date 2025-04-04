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
    "4mXpKTcaqgNaXfDKeWo3eMFvH4ezTUHXtxSD1AK2b6NyQxT7XK1rGsqcVgHWZnv46zvKEN6PNib7gEspnncHYCHR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JzFXRy2D1ytohNvtmVo9DLSQWnMxdyCo6ErryUnLbWZqwtXHLRDgGnKEWGW821qK79DWjaVGbJvN6BCcNfbSoAC",
  "key1": "5wssHiLP3yCuE1DSouasSbjVuLdM5y2HrGPuwfDpjwiP8TSvqH7dWmsLm3niXVjU1svRAJ8fjNhwxgNmqdMCWhZf",
  "key2": "3PFi7QAV2qNSS2NYPm7zHXKsb2pqs3uiiYDwu3irMBCndDTRHT3stykEhBAyhqyesdie3AX1yHLxxkHbVKzMBCtA",
  "key3": "3fbmb97kEje9xoaNQD4VX2CMacPhff3GxL4iCyUpcXZGyPqmEBnGnFXbWmvBMWLezhHMU1MQX4SDTacQTrNBeNGT",
  "key4": "5F5gxmpCLYPkHBdrXPGVba6KpTNfAMXsuqda5BQTPeW1Kv2dFuUwCuVUQAGF59r5U41FvoaAW9Sob8cGocSa6HB7",
  "key5": "33M7cFWUWhkNKicx9sFAKdnEhP42x26qsuYimZvzjLzykwnmwLpcuEsFAjtJdbTv5GNqHSKEYnamdSAPWzACts6c",
  "key6": "AeRWG7sW33iz8679oKwnVtrmK3kcREKa1uMahwyj2aVVYaFC79NG5rc2Pk4ThysfurTdpQcstXUuLknny7sbgr3",
  "key7": "34vh7QZehdLE1cRqKe6Y3idLv61yBQwB9XwsS7RJGjnThzyvaa1HRNrGoUof2BpXKYfxccKKjtm9ehhTNPM6K8ta",
  "key8": "4vPGf6RsoBVpHJp4UASspHJEeB2kkELbYwx7y5oF8sf8imHwiwu2nuY9beTNvEeFY1vnkgo9ysvWF1QsPSFrVxbH",
  "key9": "ZSFLAjRdQCqHf54uVWqHs2jhSwA5PnGNi8QNgXMpjyHr811TLzAX9h7yQ4Ns5NxrkptaMk7ctQhpDbdEiLJC9TM",
  "key10": "51M617Js7nBKPwiUsRBAm6F891d1Bon7jbQkajZYYSVhTt38Tb7hGs1GVogfTgbAm2bVMeye9sr94XAbC1o3GN1y",
  "key11": "3YjANP3HqdQytBbVtitf4nPCY1PnSBBnqvzKt5mFqXqhTiJ2JYn6etRs9EjqTheuJBUBRgtVbWQtZs8qV4tj4s8m",
  "key12": "eBeQUdg15pkABeNuSFhdMgC1pJUuaMaBpzFUbLh3dagbggscYC9fmdxgRZ9qMKMiZbfwaERsjGeY7xn4vtpmUao",
  "key13": "5RKEBhnow4T4t1SXz3bg3nMczeRcV69PNkcVoP24aTxL1WMtRbT5TE8pQZWQuPttXMLZ4nW6YBvxZyyhaBmb5eCc",
  "key14": "3y9FMsdGbALdiQLfSjwRRDkGCFPP69JAmYxt4ECAG2otitUodxHsbRUeDGqBRzkMjJ4pmKSfavFwcGK34nCWfMT5",
  "key15": "Mjti3xEadBAVUZoab3aqmPNm8KXCJUCGVu9abU5hZQhJkcyE3T8pySjWgtiTnDFPWJVSr94txy8o8BsDd9WXN28",
  "key16": "FkPS7gW24wCxFkHthZ89ejKJpDmQHYqohfFrTtL7VszXuUgxnDR9V3oNkCyXVwWawkXuNXRzn4dA9mLVVh5PJ85",
  "key17": "5U9ULnRriqicn4SrnDMJJh5kyNYbmaZXLQBZp4s4nXk9AocvpeS3kLqEetqFEDD1TPEprSNmTcjye9tXik8kJRXq",
  "key18": "4DPLkQZy1GUczHw9m5BH4HbMHkfPh3Z8Qt5c4TwEtDmaTjDiDmr67EGBtSxBGTnaifD4tTqB5eQ3zZVRiKCGRBGe",
  "key19": "Qw5DzgB4aTQveCjVKV1HPKNQ6bnYAdFBEMAUP5iNHNv9XdKFBejwwhKkZzqapo1uGdjUEkdXoTMhiqavo5VxJD2",
  "key20": "2uwEYVAXApGafrNEYLEFiNKVaMhmj9PUwspTojx8SFjJvtMbke3TxU3xuiikFfS3ZkJnL6bsQLxWtbYVeFutoMEy",
  "key21": "2k9d2ZZ2qXwoXDNwwv5BT1nj5EtrRSKKjsoPYA2iRrKvx1QEXZ3CrbCGTdKrDBxxhWJ9EjJ5by4otZ2s5DoacWKA",
  "key22": "4J48djAxCc8cBjExK2d7fnjvhVKCE7iJwpsaedkGzeXYJnNtC6NCc5mhqbiAj13nq6HCutS18qFNN8KDKNsEK6fk",
  "key23": "4xDhoBpgXofJDos5MYfNkFqpVmJuPmpY5zva7gvvq9VaU6k4JTNmMDTHSAxULkqxf7wYRhFd3C2ZhLtDby9L9qaz",
  "key24": "5sS5z8gk6RS78DcomhBnnYu54qc87ZdxcJnHBwxA73Gc9TUeCnRDpFESbVPYtmbYzitaSNLa6VocM2F522kfx4P5",
  "key25": "5njXAqwHGmyTfNJEHy6n2iLdHd6g7wLFUn5fqrTH2apnNKbVemQKjF917s56so2NsjMaqoUyYzTotwYFXyTfFDYk",
  "key26": "UxndvcV8RXphfsAPQrU9eCAZd4YCed4PTyr7qxQykL3JAHhsz5fgarLMxmVzfuKPjJDcf3bioyjB4baYjPfkHt2",
  "key27": "4grrhr5UoodmSQSGah6M4f3aqX6Bhz4WdFgpAKoqqjE3BCWG44GkV74kp8Yzjgj6NDMLW3vAZg2NZuGVB6Hhr1Rg",
  "key28": "WXSzMWNE1ms5adGaKHjphZtxw3En4ySrn2TevV1RKekEXN1RgWkGACzPXHgj45M6bDMBfrXnKhMjxQTn4y8vLLC",
  "key29": "5dMBAVJxLt1DKKKPvK5Q8hS2Xy5FWhkroEGcC8zGs7BHLJqmKqjnTf68hyTtdEk8r7prLkmwvUxb1i9xhpHtvu2r",
  "key30": "5TZg8Rtu2ac3vzYsUE4xiigj7kSsomtZFeJEs2c18hey9HUSixVonG7cW25AUP6nxJ5mrtso7Aq7TPS63WAHU9rd",
  "key31": "67AedoRmdndGeScTV14oT3x1dhmfcDKCRZv1oWxiBZ3BBjJfzQNWnmZSxv9aiVeMjcudvAHjnUXfyqq9cSBhfxvZ",
  "key32": "4QdXrnmSPqFkvJkmRoNKfAJT3Kx4S9sM4mQFHtqCTFwuEpDma68q7EmuBsb9jqauV3TzEdaRRDUi5SBFERHPFn35",
  "key33": "2zNkDT9hp5h5QPsZJ6dmDKi8B8McWZFk9562mzJzu5aZBu12VjZ13puFVfwEsg8HpMnkTDSUwwccj4tvSRSkdMCj",
  "key34": "4RLMDg4vr1Ckc5NEceDt2hWrLuLPXHRQWVgNhxsU4cqUfbFbXXy8LpAFUt13wYi2231feiui2NvLkLMEE865MZQN",
  "key35": "3coUJx7KH51YVCtF8CBeaaVYb7xmGB3ow9f9nSENzaDsV4z4VTgE96zxFsV1RDQxX3cbSHLRVKsP87XK3fVspyky",
  "key36": "YFoHeZmise6qz72bbYCpr9ogC7t82rgbsq1cXCRJiULFFCfd3kPEdBkygHS2J1ZKQuuyYCHLf2hMPafPZB5omS5",
  "key37": "2ufRBRkdoQvYixoF3HTz3izSm36uCME1aEPwiA7FvcZbnEowsuGdHptYkZBnbUdRQvhxW7rZvHsuaPZimmFy76bq",
  "key38": "4ZFZGvBdMfzgMR8QEpmTyTe98erjwfN3cx4Le97JG9FgVHhR1JWxzTMyGvpmU6um1kg8ofaAY5qTBkvNkr5N6o1B",
  "key39": "4gXMhZLcw2ox8w8TpM2gsT72WUdb4nXkXhw2pVwFTScsWRsbfRHvQBKvqRCnWf8J9rm9Ckk7CgqJ1tb8Aio7VMZN",
  "key40": "58MV86DFu88mi9t4MPfKPixYPW5WBKQRF6oLMZecXLg2aNVC3aZa6JAAAkSn7ZnqX9qDBEyEyZ6scnyKggpkha8D",
  "key41": "5rHcjDwHG96vDNh5GVxkU5FVi6uRBAj9kvGRyyhCKyLGmR6aQuws47Sn5etuvQ8nfjFgWkdi6PruqbUJzQgCTuvL",
  "key42": "5ikHmKeSQrJyNex28VvN4zqy6ErMM5nXvyCBHHGaphnjKNB8yLaNHFwq4wVKctgQSTi9k62Lu1QELxMMLFrbpNwu",
  "key43": "23YXCEFcGsdmrsZdLQgPz4U6BiFNbsrfz5aSZ5ryosWCoRXNZgFD4GMaTQQXFi7CUjrBmdVEfMoTcVZDQR9CuKYM",
  "key44": "gyQBdWYHWEtJ7aqGYKhDHtkk84JGet6VamGdXEeBvNi9zEBaEKkkyKmm1ogYMifibHCH51Q1etvLfWf4uu8Arsz",
  "key45": "4UZTEfYLgshQfqaQ5JAviC4552yV8DFMUtEwX78aiUSAoobYd3xUviKazdHQsPPL64yf3DgLZAJDZvGJx2G2seMU",
  "key46": "3JfqiyWEPVfhhhfMX1ckSY2DJHoUE7To1ZLKQAGUFoTS4WhwHEGsTWP2gLLMjQLrmq4X4KiZt1YunAineLjMRnDJ",
  "key47": "LzBd15uBnZf5ekVJj2CyJzPR6xxAFwh76xBTm9ytJ1GvoVcWbWVbqtNMSS5omVV8gXHt7YwQ3mxWVxvne6ndN3K"
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
