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
    "4iYEX58AQYQfUaYLc7PsVLiXuom3RnPULnqSpskZ2ySFEeAYwwC6xrJSHbFnejbWc4aPVmvGNQybvizyAFE6uys1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bRs1q82idVZc6qaRNYN9N94cekTyEshtBJJR6Rs9WStDPQ7abDNB2wAUA7ZSApkB72W8gb185KXpWWJLtkZvTKF",
  "key1": "42QKYZXNWVJz8FrVunXigt1HcibkgtgKz3hhu6JosaruH9vtB2ZW61FbNAvcWhUw2bt1HjyZUXL6BXMCdLUpmSdU",
  "key2": "2W1RcCY1wnN1GsEgMjdsEjC1hZ1fxrPDXrv4b3QC8SJkDSSHednsYM2rPXuSxeqPQKbQnCFyWvFZN3qYpcHVSMdQ",
  "key3": "3EvBcQibpjFfBsGgFCKAy88dC9MTRuV3yuWYktZM47WDremf4MHmPygcPxKwnF3vPAxpuVPB9ANn6SZxQitboAzr",
  "key4": "3reFXfbMcPThXBeCpWoYTCpyq7G6L6cwwFcU7p9VBP1exCBPqX9dcRBREvTTMgP7xeVd4LP3EYG3JEoDjsBPmFfU",
  "key5": "2Zz4Gr7ykJhTWqCqjAn3wgRSReiDSiWxg3Fga872a2PuKU9K4RMmxup63WDaF6zXxGzgjJhucTmS3Kpyex1teZVw",
  "key6": "3gGK4WhDwxf5B7BeCffAw3UwdMWaEqkLwyKZVPifm2buHMs91fdxCFaLMKg3srnc9jKPiqqqYDcftDFf6wkYudnC",
  "key7": "2cgHpdCjcuFZ386rXhzmRJPKrok8TJWXkvXxFrr4FL2eKk6KLAVFTr9X85Ph2aQ3KPHW4s1i2jPD4DFg9WTA7iJo",
  "key8": "5hB1iAb3pP4aPNTjf7Xp4Q8vCMzF1eF8wbGR3hwpFQE629ZRbuxLQ5WyuJzPTqNZZMUSriHhjAW5BZ11rsP5icAx",
  "key9": "47zuAp4QMKbu7K9VUBndhhRE7vZqXWiD4LuJJkdWyjqqDrkipsSDrqdrRDR3tLEpR1KHvEjmkpPu3nSGx5AFmzHv",
  "key10": "J2pH1NmjrpxYk5Ahd9FDC3u8Mf3a7JsLvCo9RiTkTG4zhBFmU6xbLt7vK8UzxoUVNLtKSrR2mMB3jjnpMeNLLC4",
  "key11": "4ZbSLey1y52FDyCDrEhs1e2YdobvyRiCWV8BhFYqqU5DQwz9drZYKVAyZhP8Npt1ip7yZFWqLnUnDJut75vAvwBH",
  "key12": "4GBVPEfPRRLn2dq6PAHorwMxj1dpLnbSJsiR6SnMj8iheG6Fgv1KNCvArCEuo6jGLhnsgzeKmRPYvhFidtAowcn6",
  "key13": "iB1ARcQDpE31jCHNUJEp9DyYmfkbRG7d98jM3BBTKk82zTeckTaZTGYcMfHMNPUJemrptkMtKYaekMtrGCicBHM",
  "key14": "JHCgKPiULTuEHgchQLjW9tRcqTpKc5zwAebVy9qS1QTnwoPtexzVga44sA3F8MmXNxZndQURUMWymh1wYYowdW9",
  "key15": "5WSwJx428WaDoRPbSCDuBoCAXMLFrap91DVxCbijFFMTFWWwdqCLPMFGWpium5TTrRADkwazi5SqqKJ1rzpBqtBm",
  "key16": "3YSiopjBm7LEhD74GcLZb7cKDtabT9BTC9BrBDBRwRH8TvjE7bWMSsaDUL4opm3vEmZG8UfiQc6Q3VT5TB1Bj2R3",
  "key17": "41HVPbDxRVXgmtj6772pyX3s33FXAFENjJ3k7b1segwP3qMZcEyXyerEgf88oambLCzShVKLnG4Xmj3Uou8WaKNC",
  "key18": "HxCJiCMiyqZ7c2PsHD16rftBL7maPdUWPo3W3N2Ae2NaHEJkJ41Creb8udbU5D42shWnSD5sD9a9GxViotVTket",
  "key19": "AqKyV79c7sHg5hZUAXU4GTf2f6HTMRQQP9uG19qmXZPeJpMj7p41zW5oJ8rqwozuCnASMVX4TyvSifDJeaGdd6n",
  "key20": "24PQZAGLEkQNv6KBnRmFRDTW9N6emed9fePoZJ2xiKwB5GM31YTbdDUarWZGUCuRT7LnJMr9jLMSn9ZctnDyYc4P",
  "key21": "3vP53MaLSjtwrCPs8Cetvnz1ZBRPu1DNkVdGqpo5zyysZBT5FbJNVTc6fKSFm6VWDUCVUpJsLWSw2GscvsDQnmN",
  "key22": "3vDfJLVufi69nAD8yTbiGD6PGbAzLch5mEKYBEgkSz8Mew2ULwckattorsb7RRH4CvgciKVcYKgzcgmMEPZqNerg",
  "key23": "3rwsWeSWR3TvhoVu5MtuiWFWi1Uy5rFk1fjH7DSTDktdYzkkgNfgcjQiBpnuQRxd9gyNwGH8uHjB5S78BjydTxGm",
  "key24": "33SY9bB1utJ2HEf2V4qc6ozZjSgdUfqEXuDRDZ8QjwRWapz7Sr6CVDT2ZRr8MsEtkfyfxEBwHdTz5kFfjPL3wnvi",
  "key25": "2Vpe9QpGmkFDgL4YNA3ZiXrjQ16AbMSgYzxyadiDA6PYHjV7GaNAZN79iKC2zEpwAp6sZhsxLMYdngJqXYjU2mH4",
  "key26": "BcW21CqzxiWPjFtC2X5hgt973veQHZPmyWrfTeS3cvvXscegRYgvALJFasiiUuJ2sRYTLBdJKDSBY2m6M7uuHQ5",
  "key27": "4XkjBk8jUJyrCZgPTok89XteBzkiTcwrWSFgVzeY1V7Fn4qh21R6pDMVbk9spm7FDv7Jqjfjm4FEJGYTbgRCdPRA",
  "key28": "4Mxuo1XDaGWpeJ1BZqVnyFzYxfCAYHKjfzGy9EEQjUQTjt7vde7GiKgaweNvNxaaqR3oZsJy8o5vmTDFnRD4513D",
  "key29": "3wNFe4PSCYprhaNUFCTUfQSD2xGSY6c4HrE9X9Noqy1rtGoQCNF9qAtKkiMHmo6dNUe71WpNtAtBg7J7muuWQT6K",
  "key30": "4FuGrAiBdpRXvvEefBR9dx1PM4MnJmbDmqQ5QM4oBC7HZKPEys8a8k1KgezQZeFTNc6QLjgmvUU1pHKxV4WZjf7A",
  "key31": "5zGH9n8MApvJLeJZJSraBwgE9jeRAKZHt4GXGnJakjeL2nqaxmgKCiLhUdCFABosZiitJDHQ5Sg8XJzigDQ4UAmK",
  "key32": "2Hb8UYQpT12TXzuU8wMrBdZa3WkBsCGtPZTMkTrsvRbwRH8feaeZvN99LPXhHmvWaY3ykRuCz4hy2awm2dvKz5kD",
  "key33": "t5hcRszMewfzxJd5aSwz5RYQMErgrxwybzsMmNQNXJzW26NuhW7c2YxSy8VTy57CFo87yjfQFNUoKkRoFwSDEwp",
  "key34": "4KcYrqRe3TRefa4iTG9ALYev6Vd8gXRknDttvXy7DMcYgncXZTG5swfSypnDBotJm9GCXyEMxJ3hWNBGRfYTKTHU",
  "key35": "59bMacdEKncuqNBstDJzNms68h8wjU4Bu9gQq9Z4dLemw3Nk3goHoNLYdvfqhqFzaeMdBxysG9qwtrtWMkZaGzEy"
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
