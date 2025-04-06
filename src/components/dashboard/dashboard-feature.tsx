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
    "4BVuUBLpDPXCtTekFoEFqz2hSFgt9Wka2ukNSAzzcZW1LWq3JUGCF1nR9p2KomyBw3ejYkzN6xvPGA3jd6UckSm5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3s2uW7ny7nNUAgq91myRzTDiuiEcZndsNiz9BW3KaUjzmuysAkzWrgSLKB8wcfh7NwL8M7vhX5KtVdvB4LRRYi8D",
  "key1": "4v5BiPgvKkZi78r3AJc7VeueoBdouPF2QPizxs4AUmtaHMo4FsiBJB4GFVz76L7UMYEViek9Y7aKyjXDZfX5jr2p",
  "key2": "5JFb8Gzf2b8zcndQEwhBU2mAVZWe6MN4TjfFSPRaGQtNsv2KTwdEMrFUXVSMmzSjE5RqgyyUg561KXCmeoKqPFWh",
  "key3": "5TRhNvLfGdnPoxUEtYHbpznF7RYmeyqmULmw76J4vbFoh7Vs1Dx3tqT9VgeWuwhjbTBJKuTma2kuMApAgKMhMLna",
  "key4": "9PphYQe3Ei8NRim11GvZKWCVguiZyStGoxKpFBXDJEoQuKSRCzzKA7cARFizgrM1MhGUqrV1X5Kqaah6mfmr33S",
  "key5": "V9qLxca9zT6YYhKvFJLjVTiYr1r31UfnVHjfirD8T5AKLcnAcYNRTsBm521z2t79K2PSGvC7iNfKc5eUwb5k3iM",
  "key6": "4bkVpMUNLBkVkyyaUwpGkkGGPo5i8d5cdqmmHREvwcwiU85KiDwg5SQkkX48ad25zvKWdUsw8ZHWgDiShEv51KQx",
  "key7": "HGBX5E9ZoF7unQnC5EPubAsVS42DGNrgzhv81fe2Dzrn83JpdPBsyrw899mNL3UytFnTPFCcfn8WD9YTfhH6XW6",
  "key8": "2mnR4faNAYpo77dYeYA7sp8D81NDhnbwxQMzdthDSPgJFqyA4TkNPwp1ZtJihN67FR1BfkKKAM8N4efaJuu3zFhW",
  "key9": "2Eew3ErX4ZLDXk5iDWjeAnurKN3gF17f3GSLPnBJGCzHgc26713UQeMe422jXU4seAAQkKRNZzh9JVMfFttVEcc8",
  "key10": "4vB8sbtX7Xbiivtj6CMsqzsQJNcNZwiAXHErjFnN5gLsbn2t7fcDMzxURbWvkzRMSb61bagmkT6norUUMph1ZjsX",
  "key11": "44GNXu1tGYGGW6TrVsPoBnAp9AJ6PU9CiJc1nFV3iaPFonFoePCAeXQKhbT2eJ1SXhS2m9JYmJsWynvF9oCs4et8",
  "key12": "6W9GZ9Ji5Pn3QqSftj5fJqAsEcVyZjzL1pE3wqP9dCtQDiKK4rhhZo7QHZxZDRzxw3x4Mv8pHwKiZ7M3ZAksbQG",
  "key13": "Vp8mgmd1c4HXRmcuLafKY4d4vWxfTmuoFYGtsrgiaifPPHi34VBoDMQg6FoVHXyAryj1SzZf8ynY6vvcNzLLam4",
  "key14": "2QbdEXBjsYW6sBRpWnnEmPjCvjiGoysMHWVgJtem2Md1EjMWPqHXnXHGrn3VpqQqR6DNkqSixRNezjcHZBetMKqB",
  "key15": "4XhT1Le1AcAcr2tV86bycAjkti3dNPy9gyd33H8691SoZpnqatAH4YTQbWH5vWrxeRFmLMJ1XavNBQvzgyQJ3AZy",
  "key16": "4iF89cCdWFs2ejkUgq3hZM3WoCLi3EgPojAn645aqNkpp9Jj2QA24JK5cTTxB3GiWGiFBTeXHoK6DkntxM1haxsW",
  "key17": "3wGqP1q2MV5m7mqhJjRHmtz4J8nLkd8HYj8r7Tqg5PgkVDdkLwcoCCfF2rkJRfaXfy7kfjJ8nQGmk1C2AjK1Ssmi",
  "key18": "3e7u1miPhG7uV1cnhS5bxprDMWdrxVPky1RaDBvF6jMWg2VTTpBLhqAqZr5nJ6KwExyG9hQB5KmcxGf5Qjy51H38",
  "key19": "5ToSjDmWRWkBEDhnQtCR73XyDozkP4WGTW9FqtmTPqfPq7ZPY3c8tNFTr7ttqDU7GaKeN9g8XixFS3qS9cviMfmG",
  "key20": "238cPDy7427evmj4bbGswFqqDWMQttJg99nGR7ddvxCXocfobRMajtgnyAYpZKA3vmujs1uLzThSqbM6dwXnfnSU",
  "key21": "5p5VxUvWm72198H7HennUhDxd3uHbYCBm4rskz8q1iu6DdEvC3MqJHYbGZtNFWjQQyVcRLmkEfJtdiZhE3iFx6vP",
  "key22": "3h7zp1AwuUxqu7XW5HQmfPZQT3Lm6yuaMoD2jvDHB7u99SaSRD6SbZAanVbChy84qDfRnNkear547sDTMHeCPCtL",
  "key23": "37UmyHUcVVxBJNrW8qpFzVfruRSoaMRMSwi4d1ea882H47cHj9fmLvw6PsfYjUC1J6qcdqANpJYLYgm8paZsW5Nu",
  "key24": "64boXKgrxVdsBYKDLDUorbbxsEMANvkmxqBxGHXfrvgksB3VJECKTtDr47zfWJ4svS5U31srirQf1A1aUSYwfwfy",
  "key25": "266Jnz5NSgyd9txfnJ7aemzs3ZVFGvgptS5sWrJms2eGfgdD359wpLbM4YuJay4PwSYx42vQTsauwvS6hbA1HqT7",
  "key26": "349QRiJuHM75xzcG13XtL93JYsTQJ2zgQqPADHxQkumF1ehBHUSbbRWF7Mt5GARQCvHMrtd673nHK7V1YFULWBjo",
  "key27": "tYrStTE9X5emKxr6eCKeBNbxPBQSXJddVRvzzwdENU1wSQDkGBL4ubxTnWVnkPixrm3HVyyRuZaL5pKsT8WUkBf",
  "key28": "2tpoh4mPSbk7Ls2FDN44htCiQkuaaPwVka6pXb14iaEN2cbFUr5A1YJBjFz2nBRqbgkTcg1AXoBGd2ZmzbKbPTB8",
  "key29": "4ogcXWipjRkCFNPSfCvpZGpAU1XeAmurcnygccghGijyHtaRVCwHRzE5RMPBaptrLYgsMsbxMcuuKrim127uPNW2",
  "key30": "3i4Kppem1P74Qjbvj7D3LDm6A9KQQwE7v2yVTfJkCgu3eoxJaoZ3fyCwSVQjDqSir1ZuczkPZZdbxMMWw9ijXkDi",
  "key31": "5VeA9FMnJXKWBg6kkHBpYwZQJ8kSC46uW1BwCHcSpfoVgJKU1A7YYEn9G3gT5nAo9zwV5Km2tT4LpyoGbXkHSXE9",
  "key32": "25AFEm3LUQjmJBUeM4AGebwPXxDLQguK7Q6PbNPYFyMhdscUFM6s7mYsRqNKAGiLPgxgjJ7LPLrqogExHFpBsfgx",
  "key33": "eeN7id81B1aDjhT5ja5jcUmoatTB83qDMgfVHq5Y5ntcNUAwrHdp9DkyyGx4bT9XXzFF4pypienKbqjP3keukYX",
  "key34": "2p77SwLe437VqmxWCdgDQYofsngGNxBUhX1ucPxqa7w72dnRN7S9udLTAzZJo8LfCuLxPfiX543E3gUEvRDWUaBp",
  "key35": "3ca8TkEDvfty8rPAs4wguPuwUmuLdvGekimEh8kvC65CDzaZs45zR3H3pJ9H8TqAdanFuJP5ydBKCsVWQAjbrpvP",
  "key36": "5hgnVMzyv1zvvZs915Sa4ogwcg7rfd5h7cSXHtLSnKx2z5uMerepKyh6hdWuyXfc3iHbUNLwyqX2puypxTiAxfUK",
  "key37": "5NM6AAnqx9KZcUNnympdBMEhSao2i4jtCVerfjUghrDFYVv4ADwopeccXr6H4n9Nvr4u2vWA3T3kFs29mxAr45xh",
  "key38": "kxv74ZfoiHQBRK3WRpa97uLqQpnVn218b7NgbUooST6AU2U5mymY9aQ8hVA7UaEeBC7cyM4oMKFcGvnKroNAsaR",
  "key39": "5mUBkuFnBS96bRsaFTNrSFBuZuArQSi73Yx2w9tbYxg2mayKqh7hdkq3FNTLJQ4Jt6THzcbYREZzpNHrmPRzRzdD",
  "key40": "4B8u6uwCcMUgS6e3DHtHns6qKXrN9y5c3xmJCcjyUYKLcHAaYmaM16e4NkZi4tNu8xDrjpXrHXD2Ax6uVALoxLk2",
  "key41": "2CWMWBTMpimdJjVmTVhQU5EJe3D9pidbpaQAMrQ547SEfpZja4pCorzRa2hadnjeph56edvsXJW1sJjK6cbEFwnX"
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
