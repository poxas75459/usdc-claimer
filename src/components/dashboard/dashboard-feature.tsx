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
    "2SeaV7H8FFdz4bK6d1Ke878VdsBEqfkGcxLvKmYj4fTQu45i6y5tjmMT3ZUCNGJ7FpFA6F3FsqKxvsPghUW4qKtx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59fwiP1WfFsJ16ASZXRWe5K372EbrePwvJhZgUcwTa7H2S8ZRNzG5z64EeesSY9FSsxU5YoZ6fEdFjTr3QsrHpS1",
  "key1": "4yNQ6YaJ9FMdyqHsUDFzHgzTbnyRDwPzgyqocA1FymMDFX5K3mztEcCsiGDUEchNod97mufzHXMt27xkZwJ4DPS",
  "key2": "3xTf6S4gupoqNJx362SvSi71JCqedVd2QeM22zFTc8igdYGMh2bComHf8cSevKJfLNvQ1hTXBpeAnG4agFTZKB3p",
  "key3": "67NK74pp9mhSCBUnoiMMHB8q58Kh99usSuT5a6sqaPd4BfZwVCsRogFW7nRVfHExEJcyoWxCt15g88JkGevwe9P6",
  "key4": "4128iaeQrd8dcj3gcGaix857gzkKszd9dKHeKXXLR7ZNp9iTvPj9dz6ksMt5rfEFVGAbMuJbSgnutT6NCt25LNoA",
  "key5": "USTtqbAsGHH3F533zcK7RiKWFuKxy6VUMztPxswhjaMDfUKRHQCTSDN47Zb2xNeujyPpT9ENBZbudkK4MU6HcKM",
  "key6": "391ErpecuhWNB5Mw1MysXwfUFEfUtQ4C2tjY4dQUHRSZqkfXXrXjttiaRkHfrTdibV9sNCAvad71DYeCeJCQoCQd",
  "key7": "5CSnf7ARdajchutzZ5ZYThMHV4RAdrwxj4wLMafHJJPoKfmxQB66yFkh2eFJxHC7aGTrado3JVssARDixUTtqKfU",
  "key8": "5t9qKhCnsyNoeHUtNYqpHBFAATD7xzpN5ECWVX3ERC3ejSWPPBHPGUS8oq87H3neNASMCyjrZdRRvJaiBgUbAyY8",
  "key9": "36CKt7sG7YLs96Zg5z9e8TkTatz9m2tmkVGKMhziwsHAszpieH8bzzZPRizAjxUmeSaDcSYgER1BidfNYzJ3aCRz",
  "key10": "6DyiKtCevsDW4d5YtteweeUHsjnQj59XRYEz7C6D54oZHVyXBUoLV61yjTYEQEQoUJ49zUVDVVCPT88UXP3PTtp",
  "key11": "2BVs1EPkHpEtNiYso8z3LjxaFr2pcH2faQuiiwCuUe269JVZTcx4GSQYF4VbKmFEKv7SzRW4Cix6FWNigz61FPb4",
  "key12": "e5BYAyzuwSGMQQxTSLSAyWoDaFwrchmeCcLiCHGNLAZASZFTk9FpPHZY9d96yedzfuQ53DDoCRHjK9HQynXRU2p",
  "key13": "25NjsGuEt8eaQiCnzZfhsfSuNAbMp5bzxx1d93cbczYjFYgaHW6oyekLtnSpnyUZabRnfFJ5KwRcELGspjhPEjBi",
  "key14": "3T8vG3dhxTPannA1GSZoQZfn5HtoiHy8Rn5K4qEeA7kT15zF2TtQsXff3p8YpgBaxMLH73fxa9L3HpJzpT53MadA",
  "key15": "MakxoCMqVNjq9h3XjN3pZgnfJQCZjMNoXBRepciv8BxxntWQxgemEzYbi1v9wuaQGNYq8jcET6zSFBxBYecKr3D",
  "key16": "36F7vQFCgo4VA6DrK7bfgk7xTQBr4m1jXPmYXZDNKbVLgFp9NP3ihVfhVYjSwGxEethLp4n9tuFuruWibZDFYPxx",
  "key17": "426J7bjeEpBp1fg7H7aCNR3EMhEUwxX4UGocb2JmhPUZVyi6qegGznYzQuPcrzJH1r7M237HHJKXtdXkB6Zz3B4z",
  "key18": "5va1ZejumAqkGrg4CTtBv9LuVwcap3RqHfbnBRFyfnztx57NnKpULz1MWTbVS66JC5bDzRF4jBzD8aDmgjKK9V6o",
  "key19": "35AMN2ntxX25CLc8kRAAZtCBpbqxxL15WmasRhQvr24JcwDvtimqQSMiVBxTmw7GiBZPJnAuTnpx298LCQgu9VkN",
  "key20": "4sWBbzGPJK7AVANcejMxBhzNPH6yToaFuEM2Lm1cXgLDRhjHKc3hjW4uSk9npLUzFBhAdGyhi3ZnNx753SQ1GhgA",
  "key21": "j3ay4Z6U4GeYnCLxj8JwK9YQVtsassbGr5vJQw9DWUo1ink5ZwDAe31QDNgc8XDnj8cNzikoq5tEtJL1ixTTfdn",
  "key22": "4R9mADS61BoynA2DUNRQSurdWahx17cxDQG9z429FHphS8pDFhxgEngjc5jmRPhk3edFSuCstNZyYuvdFDbAFXzp",
  "key23": "5p3Qc9ZgCvjNPyTCGxy4yBUJcCXEMg19QShetJFBJRuzou8Kck4LxRSQf8PguBBm7nPkSznDAu818hTG2Ba9aUpm",
  "key24": "MX8ibFiHkAHkar2vQvBpNEyxBFps2yX7S6AvndBm5rhSmM9tnCVNnVyUsRWnavLEsXA6VXW5RgBHiLy1GCQDSXM",
  "key25": "3qHhpf8MdWuxbf7hkuDqxpZUvgmxBX1fNqDBkBxReEUKwQ45zZPg8NMMd5qzf3QGSVs65VXq1veoKU46cjZPSb1r",
  "key26": "5MvWfwrN22Nj2UKaRjou7WcTfFwueGdME96C3u4gxQ2Wi5wtP7eKUev1am7VHFwxAdCprvojGWHmJRbVVW4naATH",
  "key27": "48vFX8hHQHwTyTUVzgdDmC8vFv88WfrHRF36frvSdvHBGwhXJYVCoAMJds9KAKFqAPUnfKDocLgjJbN8UPoEuiQk",
  "key28": "KM4PRs5rfUT9FEDjrFZyEqpjvuoBaMfEWSqLReauL1hQhVV3sayyhMKmQJqyBFJhjySj2ozgRRwYfkqWTMitkKZ",
  "key29": "2Ph4mEWfbN34gDjAQ3nc6sJ6MxEELi2r7Ta3T1hiVVPsqLRirbm7J6UzNCQoLMu6nHE5hcnqszTHmeW7b1wZ4mXf",
  "key30": "4tUToiQzbUzomgU5EBsySo6qcWdc9aU8eX4AEvgomExVhzDvrbvjPAGRWtZEzFP5zL4oasVJchHo58Rh9agQutG",
  "key31": "FJJS6zgKUXtizzqxd4D4wiakD4Bbxbm3iuCuohMcr5paJKu8V4WGXB1fThhgUjgM4qXEEkWRDVPmTvD5ztgHTGF",
  "key32": "2858upJ21vei8odzqXat2U8Co5iUgsLXbyTzM3WZKkPwC4r3E1eDwMQipFzcX1FDhNDzVyPxWEDwuVzCiAVYzfiM",
  "key33": "42TY64Z6HimpKpRrvubFfkeGFMxcrUfQgHVTrboksDuC5qDQNZCZciLTxuw8w66W4HhhSLUyfRpHtRqraDkhyEeV",
  "key34": "9MjviiMix4gbXVmeVPEWrze7FrQ4w2ZmRXs2aBGD4WdmuYANThRddXkh3PAKHniVAtWUizhrVz6K1mpsXFz1GFE",
  "key35": "g459CVw1ft6fpr3fkFX5vnWWkwnsrpk4iybsVoDFzQQvJaEaMMeNrEgiNWHepBz1YhX7XK5nez4ekQ9bqJPF2yU",
  "key36": "4r4AchqxqK284jAUUBbKsYvLRYWdaq1Vkyr3NZBzCnuBPiZ8AxFmw3gss3sjEEVVGUdvPac2Kx4TZ8e4bAotYyi8",
  "key37": "4CZVcjWGXtXpwrYc9F1NR4UaAyT4E3FtSHz4PEWirpSac6F5Tywcv682hiSqUYPb3h4kpts3AWMeoe37cAFNMAHE",
  "key38": "BmUqFr3YGQEYsQQezGebKmUYJ3esMKGCE12SZQR3ECrcDsDH3vdKp5ztriPJtJMn69FYtwafa5Tv2Wsuoe2HTAE",
  "key39": "EXkA22fENPuTbmkQ1vHzZzgaSRiLmx5AvMW9gBqW6PKyM1Qwk5FgEPJ1oEk8Gzb2aaanzPdhmr1xiDMnncsTi2y",
  "key40": "ovYBfXqxvbkgEFYsZgcq9eTN2QtHDw5mc2BC1Kvf4HT9bfUk5fd9svAT1oYyUjSfuTav7svw29i8WTAHJwAM6Ep"
};
// KEYS_END


// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "2aAg4HFiYwjFqa3s9dD9NkMGuoQR4xqucaGHt3GXygyQerzQyqzhdVimUfLadTpyG4dBrXw5dbKJzMdmagrpNeCZ",
  "decoyKey1": "2qGYYggnqP7xuvpSjheeH7d8xnqA6chDZtJ3Wut8y82Q9Sda7aVnFjbVoWMqK2bJWSHX5mK1uS6P3LU2zKmnyjx6",
  "decoyKey2": "FSiZdDYUhMio4SE29pkwvGXswwnp1pr8vuVZNyQm3QqCNiyTFsaWT4qTUaPnxvHUwaD2h8CC8GetwTdG1VPSthc",
  "decoyKey3": "xE6pcTuBSR2pxrXiNQLKZkAZs68BHV5mjuphbgmqTe9bwxGiSV8SHBeRZ4Zp1ZNkZmA4WHfzX22hWbLwesnhL7n",
  "decoyKey4": "5VgukLU3zcHC2AYnp9yQiWx3cMp4hApu1pzJkUa79mpPYP1cQAbB4g7zxwi9jeZLLskmXSF61wWFYKPVs5EnuYSB",
  "decoyKey5": "4UMcboXyebWhQBDiXAtmSFi3ZTbMRmvxxLTrdVzxrAxxBsRoREntXjc4j3pSGgiqJEnUgPaCR6RvxEtimXYEgsj1",
  "decoyKey6": "3Ca5yChXK92kAr7E26Fsr4QLccdYJsGk5jbtKw5ZH7zEwogZADjnZ2brVgvCVfLQhTqeMHXTRD4Tqgqv4u9WvyKn",
  "decoyKey7": "4ypDUkcGFK8tqQ9DQTNwgaAHuLYS9wg69MzoNstDmwwmWGPj92doPSo4rQfRE5xC1JLfFmDHCYyENd24PTSAvhrn",
  "decoyKey8": "2pPwTcZDYe13QcX6YXCXh8VSKjxfQokZfa1GHz29QkUDbENUHeZanKjRJMPTYe9LuAW3eVJBCZ2KwPBHrH82gU4U",
  "decoyKey9": "iCEw5tsMKvyTpyppa7UuuMhX6EqjuKruQPp1JRfz3YHDz9qeZQFhAgkBXK5bTDoqKEU7c4xDY22RxnXHbrepJSa",
  "decoyKey10": "3kpzD6xejjqnAVjm8qTDaHa94WfWgeRmk2RTkMxcq51Z3DSfjw4U21KNTkNcjUjcnkyVqcC6rRyjbDbnjiUAQ4xE",
  "decoyKey11": "3GMNPhdcLtBaCY4V32dqcojEZKoJpmtnMP1afbKV2ZgU865aea4ZMmG4UyBhkHKpBnsQLPuVKUjjPtCtuDJ2A5wT",
  "decoyKey12": "3YuGvieH3XPjHxqhCgvNDcV7poLMp9Le5cLRo68bh59hHopDHfyMPV4YVahswPMofP8itQvaMTz6kNhS8Z8rhtfT",
  "decoyKey13": "2B4QRsx47HiQANtsqqsP76SgBFQtaK6GyMvsN7XofKfgcU4voP9GxtKEpsSqGBdRXC1RVEAPTUMigscgQzSHXk84",
  "decoyKey14": "3we7v2cdZiZNiyQnUCSEfPQ4ptsvg8oP6yrQyzxpf6W8sXwJ4psWA91NYWmWY8qATxHHAATEisJRwnicxwtPTtJg",
  "decoyKey15": "3n37j2bHPCiazD7Kk9AcAHJfnefArvMgTFAAwQywRC9KTE2kXnpy2SzWc8hwFfgcvzqSoEb5s7uczk8U9aG8eEoZ",
  "decoyKey16": "5fjzCnf2LmWLGFBbsMeSYgHU1zhthxBzsSNGw7h2b7hkK3TUsTEWgFjUq3miYB3Rxf61msnF7a5pDrARf4DBcqyH",
  "decoyKey17": "4tzTHRoXdyUsfMEnV6vuaq96EGXtkoQtFXJRMc5Q5XhjNkWehWA34fBRxhvZCCLHJaicdotLT6nrK9UFJB928VJ5",
  "decoyKey18": "2puaPP89ddZUcvcMLryucaAHTsyQ53pcfPxZEF3WVBkR8F3qmmojSEtPWoeTMvy9nz864UNBDhsPL5Md43FXGytV",
  "decoyKey19": "5sBZn53SDE8chBNUvn9r1Wm7rankUt4mKQ1iwvqfxykFm9Crye8VoE42m2pSaSEvLwWRTRQEbVaePj93uExY11iu",
  "decoyKey20": "2wPAjpwVJ4kofyPCAn9d6TsLindWzkmsQ6XX4rsPebjmhSeg1wpqLQqAVGcdtqBpGja6iNwoxEus3SSADiCXeoBy",
  "decoyKey21": "2vrexyFkMn2Df8z4HZBNZjXB1XnCLkDeTEKA5CE7f18gZfGqR2JPsLyatkM8zj9n4Y2NJoGX5wFaMyVhVopTXzsU",
  "decoyKey22": "2e7SoP8bFMdi4PgbuedJxr8s76mUz9XPi2KH72oCkYJWMndADmepjSt3hisPJexpBzKQ6JvFyxhZm5k3u1bs6FEx",
  "decoyKey23": "5ZjttGDPVmiva9GoDdpUQSE7Fvri2N82yEJh6vbhwT32aJb1YSEhcJWXBjJR4qEh1qp4kGw9Wofro94TduUVtHfo",
  "decoyKey24": "2XL6GV5ztmKSzBkhfQE8fZ2ukrMteaQXDP2ZjP1mbjDad6sTuC7vsGBsMhwKZArvUmUvLicHbQa5GrXCSgWxLYWg",
  "decoyKey25": "2ShAihv9aZhcgv9ikcckyhZzCHkKhgXmxLyvZbzQmJkVZWayVfPZw1KHP9jpoSL6o8acDDT2yyatbii7PTjTyszZ",
  "decoyKey26": "5C3vfNTkfgQzzbySJcif8UsvhsDRVNhKUFZEv7YwpK7MPeHnQf96xjnqECY57DqbvGaEBW7ea2z9TTZVZQGJD7nw",
  "decoyKey27": "2UyZocKhQ7ubhqCh7dmUtNeHXrDbSHupKX9Pn14uJbuemywzQB7uQ7xAQPwPJLYvnivg4sprYJ9EPmTTdcA8sdcw",
  "decoyKey28": "MVTWFrAifuhPueHLZvD6u5LunWjb7BXZ991qA3juYY4cteLsT2jY2ZBLVx8ACVwz3TnsvpYEkuuSRdbBwnNX2AW",
  "decoyKey29": "3oqyWPdqZwsT4MURSpGsvijsMz66Uzo15tEN4LyhM29a7txXkDVQQKdrkQ7VsJvaN2k44oCogmkLttkSxdNPg3o9",
  "decoyKey30": "4EQebb7cSRZ87Z8U1cSzRfTyfNMbTvz7A3Et7oSWZfhuHJfcnWt4GLoNzHZ74WJnh1PGuoYvvGeNk79Qm1vV2W9V",
  "decoyKey31": "5Efdga37hmvBLNzqM8GsnHDds6ogqmsvjnX2hfo3x8S7tzhWQNv9uHFfnSmiFroHBSaX7Eh1KCwmLnDvvsXhztca",
  "decoyKey32": "5sK8aTiVowqzsnbmMuZpT9CvDwAqHDANDUjL8saY3nnn4TyUqboj9KB7wCgoxwGT1RKaycuprs5HeK8YnvntafW",
  "decoyKey33": "4xqjiABeDTGbvUmrG6kWev1K2MsRfQC6whP6JKpFoD6xqsm2JHwaXi1asACJmP4RVUYrKcHtqmcJDxQwcwibFhJc",
  "decoyKey34": "r7xKV3KJ1c2NmieKehjAx5zGGEKVcn1LbiDV6SXT83NvMgNhzDbUyNrFmfKjjE56bHzE2nDPHMaMA99Wpv9UF1g",
  "decoyKey35": "4YVoqxpSPLtVvsJ3qRZxsDtVjpqqGbBf8GH9WCY2SBA5PLVWuh8oQVuXcJnT5a1j41kkrTLHZppJ1X15gwuq5KDq",
  "decoyKey36": "36WrmS9qsWfzvBXeYNSe7rqp2NfuaAQdsHVcsT4LxKGGLy7NdNpw3E86szUCuAoke9EyBer5dL3AZUw9XZbsGpd7",
  "decoyKey37": "4UQwrV5eEkc7DdGwbPsVD5xFZLiubFGEBbw9bWbimpEBzD5ac6obr37ej31TVXGyGshU9dukvZEtzxsHG1mp8Fkf",
  "decoyKey38": "3A97g2TPJe8R5b19QPqsE331n1tCABriCiYkCMDZ2ZqjCpeGXXrsxgxBQprzcM6NgTaYk3AsKmT7KgZHcKruYbEZ",
  "decoyKey39": "5bDptNBL46yioWMgz4iBfiVyoULu2v8BPUvE6pG2pQ2iY8x4CXnutHbKamhqgJJGmqufJiENuwn45CXK5X6EhqBZ"
};
// DECOY_KEYS_END
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