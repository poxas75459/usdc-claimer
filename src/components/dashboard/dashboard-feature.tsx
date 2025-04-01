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
    "2QddJZmnUzXHKGR43TuQUy4fD3q6wXhUZgiGi8STETxGeLN58piuYVGkempbVodanRfnrSSFGUdLoWZqM3tMMKU5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gncwfwA2VtSXQ27jyPBGmPshXq8TqHmUVDZFkS9EmE2AqJsZTTz5rpiFhiSv2mek63Dohx8vLaMWg9wmvV9zRVw",
  "key1": "4aeFpn7c8ew2JrFhgdwSfadfF5BVB45m8oQuevgNx1ZTVqENhtyKVabbfSCUkD1EoNUGqSdQtBUqFeacxqXJDuVe",
  "key2": "5hKkonydxznw5ixLVJqPEBAC5XxpQ6yXmEtbyv99snvuC71G3AH4wARtA1g9Px6kT6znj2koMTivbHRTvgXZbtAY",
  "key3": "3u2GD4tNoonPJnrGrYYvex5y5apS9TjUYsVwpZw83vt8ZmbrfoZBZyn95rEC6x21iq8zybf4iGtfbhm5zR11n25b",
  "key4": "2piXnwdunDjkycff9nJ6vqnh6UzAKRNfkbjUw3EoBAz5kqJ6Cj1guxqoBi47B21kAz7fE6KJnCqtxrAbkno3k8Xr",
  "key5": "XKypaFGY1f5VcFLy3MkeB665x5NUwczeHBVUjzxzokBmj1rA57xwfcEtpef83Y8Zpyx5pdwPLDdH52H6ezZYrP2",
  "key6": "5NwZoiyQRrJqwy226kG1z1hWtSBszxSbGNL7j1dVaquxKEwjoar1qg2UvQ8TA2zo2rCTyCpU5n6Bkizts8eTCJnx",
  "key7": "2sUSXw4Z3QNxf7tHU4neGQarvh6Fjy4XcpHQ11gta4VUrN9uR5ZQPaUuuUsit1qB6h8i9VPfHFZSrBsy3qs3w3EP",
  "key8": "4ejRNbvv5ZS2ejM1hx8cC5sqsf9VFY5j4E6NWNjCnCeEBg84u3jdfTpomphdu3f6eD3vKCr5nxk3WYJhLUgRBm8m",
  "key9": "bc4SJ8FePrDUwQNCXAvMoscU5Yiy4VikQdw2amvieTiKYhUVAkoZLiZ3dHNAwz521QP5y7uBDAi2Gs6ftbdDUK8",
  "key10": "63DV7JpKvdbURa868Xuu8JkXHcmreVa9SrT69rd4QJe2q3DHT72j1Q8khxhB8bzVq5fFxPXSicvk48wB4MDQ1Vej",
  "key11": "2Gh92PVhhacyoBYHSKj64uxXpgAzkEbmyPYzLxRFcm5MXtGUMLWiL6ipeREdpK6kgcQTrWyF3puvqviGEgey23Q1",
  "key12": "5RmbjFsn7rgdGqE34G3hRjvDyv38L9x2wTGrbmNNwAvfSHRuvC1DE9BiL3ur9pCb9g9D6GyTUC4bdqc6eAvdL8sU",
  "key13": "3sePTqJSPiWMXPXtJZqka3Y1Hoa7yzDwNzWaof9ymvpHW6QZ4QRxbdErizuk1mayePgG2uCid9yRpF3Z2aUYcHvj",
  "key14": "6aZCNU41ZQcJtuKB9HRb3S8wyTnHxRK3VMiNV22oPitgGTita1TBTQrvbNvZf4kjxABB6DagFYUAquKYTFU7RkX",
  "key15": "2Py3WuvYBJRXRYHch9A66hdmv8T67Jjfqng5JNmYLkdW4htv9EFtiah4MXpDbQvMoYq7uH439fTiCLyeoe8PJEnn",
  "key16": "4G9JCAw4yEMyiGFES33j1UXnekEtALHp6EeKRTbtQgsEapZBmYYKv57J5YmU5NB6Cx2z2y8hP8n8LFe9viBidsAK",
  "key17": "45ZfojMEBs2AiRFYtiAEDdVscJUc1Yh7uwq8F7fRNVLvzFihW4RcqBbeRc6Rd14fR3i8RqrsoeTD7StZs162sPUn",
  "key18": "b8xLnuf1uq55HFU9MSMNpWdW3ps6PzBHn89TZFoTXeSH18ou9d123hgvzg9aAiZCpZ4ghPpehDF5PGFT81Dk1KW",
  "key19": "3kZwZNUomg8fGQEEsaEjNZGKogX18SUghBD4ZVYd2g1HB7V1W13TKWhR4itz4jz9gTgAVg5ZyPMXoYn36r7bcch",
  "key20": "5zvMMCugVsPmAfXjoAz3iyq4M75Py7DhcLBgTvSKCumSMgbAPwitpH9GzHRmcq5Ro8YbiJdxjAkSWxo4kZQYTKek",
  "key21": "LNB7XXT6713bhihdB65VYhoy7bvpEud7soqGnZ9HhAnuwgmQaX9hWL3hecZnRi68GFo29drDipbDBtxVTv7Phnf",
  "key22": "3opKtofGZbaEQGEDk3A5Yg323kWyiuZfH69iftiTbh6jmLSddmuGBpXyVtTEG8o114DhvCSbqYdNuzNDFb37uRWF",
  "key23": "4pP1ErDmkwZU2WULeT6kBfaYwSGcSWmgozqYimvN5qkA5CartGM5MnoujGEvUPCGyQRubknuF4EaNDgck1Ajh7kJ",
  "key24": "T4nmcuyzDfDuwXb4rc4XpmZAM9yfkBo6g8AfmMbfXWDRaEPfwVFDV74nXwMNV1ieSrNUKGnbxj3pnRBjU1j6Jqp",
  "key25": "47MtL2Ekvi1yS5BrAwEbaCijK4ik7Vohjvn5piEyYaC4zKtDQbLVnN3N8cGmiXUTHZYPFNTfpASbLGisRoYZed1Z",
  "key26": "ib2nVLy8s9tFL1ASkz13F1Xhw1SqroumgA6Fk338oxHdjecHMgxEP4qbwF1MWjfe3etjb53N18SVRM8NQ8cQ63y",
  "key27": "4jR9zYSHnxYzXPbyzDcCQ13x7C8sLPPP1TBRZrWRGM3AZpQ26S6ajBBueiiqdT1R4ZqZzTyFRCcuv5dwuHy1sMo4",
  "key28": "4uKSMghx7oT4UqRpWNKG4CmXTF7CtoWrEBTCv1CevwVfXtCZi7VcB2DkjdQJpmc5WBno6cAYyaxc2RFuGUq7kiPN",
  "key29": "3YPwV9pvNoejr7w5zt5JBT1R4iQ8tG5M7ocg7G7jmrFC5YRWDhbYGLe7feAY1HBNHejF7FXEo2nzvXLmJoGRvJFy",
  "key30": "4VoCxnfAzjKTp64YpYfuXMrCQYefwW4G8s7jEVzPh9sqFi5VyTNfGwCysrxCDberzwoSCwefHvFSgPdx61RbPWue",
  "key31": "2MqGUdKPWLRCqZzQ2DsVYNGMQKhA7T1wQVVCCz3YRmU67Xr9AF6xucbjXr8nczZqtZyB2BYJsjcAp3bhqxFRXAdi",
  "key32": "2nFG7me8Vbf1fdSeovSNUNSFMCWvmCNuhwTyBY6sYw6BCAJYmsvWuDTTmP5Fg7zkZFQZXutACgz6X67ds2LGpdFb",
  "key33": "o5T3qivmCiAuysty3CAUpL7M9J7Dzyv97oQELMDzHrnsULJYK5qRuCRN7ajRaasPHoqKoRz5d1Ewxtw3Vx3gbKc",
  "key34": "3egKEGQMggPBFQZrBgv57sfnESfNV9GnrnxBtgQCTPwtyVpeM3BWLVV5JvwJPrEeUgkaeqNDvDgGmG1cLaA75grh",
  "key35": "64KQpGNBRqV4m9HVn17L6EEDyDgZgCR1BMB8p6M73918Z2uBEwK525bmhfdgf1pR9Rj5Zy5jg4VbmMZW9HBRymyb",
  "key36": "NVNa1AUyEdBhR79ah98DWg8Wb4Vn5JUHVfFrtk3rskTy9nzXuKaR5e8hvNYMNbKKMswNaPuXE2vSAiTuxvbVqXY"
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
