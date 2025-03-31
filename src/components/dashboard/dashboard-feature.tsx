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
    "afKZnaofsjKZwdrFTRs6rh6qFWijbVTNh5LsifkebRep2d3LKgJHmR6EXJiUdHhfDMUfXSd3hn92ve1X1T5Jak8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qkGRt8SYSc7xBHJXx2Ld26y296jwRo7d7zMKX4efK8Dgk1DGVFb1smfhNsf91t1p7UQ31KaoB4YP2m7imDJuRQG",
  "key1": "QLLJQhiLoTh6zbnxwpwCmQcB6gq7k6Ep16gEm28kNkbykNkH2nTpC7twYVoGgbZXkZEWB9B9c6pBenHsCkaZJaE",
  "key2": "mAUphpvdCw3fDY2A1UEXvaUJnfoGYx9boXFBNbBUDwfsWuktt3xk7N8j91Na8TtHAqqJD2uo3eyA7xTi5zPfzLf",
  "key3": "5CstkqU1Q3Lj2dwxdS62qaeZSDwJw2cbodCE4sVEGQXE6fdnNNbtfgW7V1dPJWcF12EdH3sFTdFzhdfhyXAXLjHJ",
  "key4": "52AEiixxi3uXk8yrmH6YEKPYBZiMpjoUy7HQZoLndauWKjoeTx8VrrrFMcpJRijkmnWnvZ9UbA2sd5KkhWK1q3Ez",
  "key5": "4yneCYoR8VqcUSjuFJd6pSsZP2QyC3T9un3V2vy2WQHcpNp38nXZ9xy8iUvW9HJVr3X45bZxVfjWEqkyWZCW55hv",
  "key6": "5L5vSo2FxHUturEPS2U1qotA4XhRntBDbVQFdZHTvbC2i9J3gooc1sZBLHgEGQNFVsnGnUUwgcvAi8efeTdKc4V7",
  "key7": "p1p37u2NXJ3WZ2VJeeHF1hDBWzh1nUuyukr2uzoVsNgiFBuaUYwpZQgPGnctm73LuViuX7a3QZVURfQb22h6857",
  "key8": "3GNESKnp2ZrvkRtxzDD9hAcRvShaJhRpK3gjjAyWgg1L9aukg8N7cDuThyKdAvDDSqbQBuDUPp1jdtrjjCZV6q2D",
  "key9": "2t6JkWYnTC4HADSuMFixsDje6ceWtGgH4nExm2GR2W3j9rA76j2qttyWPDqW7Xx4piehLWbxVvZWMFDN3XpZYz6m",
  "key10": "49Qgvwb2i8TEPEe6kj8KTBVBkkaTK94tAT4rRm7ifEpJY8nkBfrBVY6ibecRTqtQXvEPtzw4er1MrhwAneokqiJf",
  "key11": "2kDNsSa7Rd52HLVDZTZ5Kh2L1TYYaxukprzGXW3UnKoTMjPrFKk6BiB6yemSZB6prhCrdUoPmCyFhHybtmMZRFGT",
  "key12": "4kcrGbnnnEJEWPwxz4Za9adk8NYexbTfDgP94rjWphe5KyHq8L1R3HaLSYphLrEkEwSJCrS3n2Cy8X4AjwkMhedc",
  "key13": "Jb1gAmeoR3c5zEgq3LSZBdsidDuduBsTE1T5X5MfmuyLQNzEMTGTTYQvVGaPDnS1opyygQmbUkecu6wdhfFytk3",
  "key14": "2qvz8Yus7cc3YrN8eaVaZeCPpLLtNyLprwDGq1GRyDvyGnQgJbLD5gFkn7Pg9WhRZFtgm3AzXCKPQdWyvuteDgDE",
  "key15": "w6ZpCVcGKdzbwnqSTqghjVmfEzJ75NdYpBzoGpRrcrFMDfvah16CmKxFK4RqBLNduRCcJKTkc2t1gVmbDMQtShS",
  "key16": "5JhxkzNC8S6eahEgVxhGcpPJVXHM2fGFG3FQ41dCybUCmY2ZrcBeLTP8BhT7PJ2iZHRDK94s7BuCW4p7VUi2N9ar",
  "key17": "2mK7e6vSzE3exSNEap6ZhWSB2CwTrSH2KyAgE5NqZJigtMnsnRicwbfXh5ZtBpvLXUvnoNnuqU7kM1LGHMW8em36",
  "key18": "N31p6pE4ajQoQCqk67AK2sCxchKZSus6unbpM5qjFQaP6MBro9o3vhkQGwvDtZ7K4g9xQn1HbAAuBQbhYVU5dJP",
  "key19": "2wVEJ7CYVHqFg1EbSL6SKPJNjRh1UgKqtXHWCWcGKr37Y4T7ryLfffasfwebU4UERtaAKXcvQXEf95iX3KgyyoRP",
  "key20": "3dksRAnfGJfX8MKeHgFgFRqHmNEytdmA4voKmYSKEXENvTmQLVkk19z6qEV7h2TrcwDdpqxT2nr1QzhBNFC2peYE",
  "key21": "4ByHoeBrdE5up1gVyMYHUU3uFrqR2rPzpACwVQ6G7C6RGxJoF7yk1yGs6z6K5gqtsL73KCABjef2tiTDB1VSmMpe",
  "key22": "3gLzS3iYR9NwJbRZT9Z3jXhhog7fzeJ882rD2ALYTurjwRHcyUhC34REFfuGrnHxzia8gywggSew6xGx9z2mV9xo",
  "key23": "2NJqQTzn5TDL1toRVu65QdJJS8qncZGm8pvhDCZhep84zNjHPYNTuFy8iMVje7AQRyzVYxsTfUrcsVorKoFMzoer",
  "key24": "35qhHCPh8pe329J3KurffYyMJiUtaTBcmU5qcXeghT1Cejr2ctExLxUGH8mXwS9DDs6dEoo7zHoiTSAVaADXkobz",
  "key25": "5wR6zuZVheiHx4hkVmhVbFTXXxpbtZNQ29z4G4Rn9fhBjT1YMSFFTDBMXkDnvvHLkg6hkf7pXS9Fb7kFcWTz79JJ",
  "key26": "5f1n9TBRhDaZawa8dddCuZei2LRRoyqZevDgk7jPNa9JQxka2igWL6uC6mMnUoeCRbs4VNisNxUucnFAqL1oFbDn",
  "key27": "3ea8tArtK2e8Vgy8kwuM7Z9f5qNxg2QE7tdUcfxViqeWnm5DVcDujA7DiWCrEcRtuyVrJJDqZyKP6b4FG8BCCw29",
  "key28": "5nS4nGqP4dNJsd6tEDomQNx44MBgodchcMCkJyTykNkH5zVQ3vbwxQ1HsdfhsiDzB8guhzk3QcLM26gJed2o7jQa",
  "key29": "5pX1Wjj4uHdcghHGJythexsKvZSmNywUdcs9MAZvRSzURcLxsJdDGLhwo4VthyLMdpUvuFDhJ4foKjmDnne9Gbtn",
  "key30": "4a67VzBYb6cusB5J4iedMTCajrqJ31qX16ZrCYeLgCaXgmtsfcxmbrULVsk3jerh96VA9ZEfex8tYKa9zPwt1gWk",
  "key31": "4qgyCCxn6bfErtLvffCR6nLEGYWur63EU8Vi2KppNPnrnekHZPwunQ2nZJrsqDWqLiXe4RufjMdRnK5osWTPkd6o",
  "key32": "345hKL9FLcmRWHtubrMsDEBALqXtHj9m2Yyt7cAkcRWf36Ms7ccGhthcDBbobuWu4FmBxBbMraVi16fP29ZwGLTk",
  "key33": "24npEAcVZej377NLoPEsAvL27Rkpp8xHHTsaVg8xN771dzkDWv7uf2jQHWrm2hbfCzRpoCrduwVVgf1h8NfANcuj",
  "key34": "uyRBfDi5iEGaZGBZnLGMXCqd6fNWjmYJeaCJjkPwJLAV5qwhWnMCiCHK3jmG7krNeabVvLvFY3YLqeeKeMG8maH"
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
