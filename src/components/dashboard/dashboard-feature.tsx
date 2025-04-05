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
    "5BwJE1xRmh52NbSWEXfyim4ASxDJ4pQR5tJCG8ab87e89YtknyJBnGUjSb624Jcr5sGmpKkgifbCfFQeD8Zxbbiw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tmSnFRpx262my5peosnLncvv7hrFTYMcXvw5uUdwCcLeJQaqSfciByeaW9B8i93opcV7cAcgZGJCbHmx2Ka2xSQ",
  "key1": "4QBNKFABytDHqcfmX9Xd83DKwzjp1GELNVDa3u8JDQy92A8Xac4PnGocYpAfawCVzfrYyzpB6C3dfNrkmnu9cZfp",
  "key2": "2c9uNAUgynBEWBVAMoZwgqTYAcF4RUkETvAE91LLyDoTatMZiQwiLbkDhW9tqkz4sFqucht9sPJnLtTUT52gA1uz",
  "key3": "3TMxvKNYtz9VRkz2fPWuDky3uE1ZKxWRqSNEoHNk1JEanxaNd2uxEm5nYt7tCdoRRbZdDGdz2nzGnhYhaSV7UT9k",
  "key4": "2N4JXonBNZyEQZgRkXm1RjXrJEF5GbGRZtkMh2UJrGGo1cC2oaCZW5a3hoGzpdsVHkkbYWKYRtNcCKN3x1dzTFdE",
  "key5": "Z8KbkLV7bSMTRi8VpwweKLHKVKUjqWVtqySjsUBXtfgRCjPPjudTzxQTyCoCKWEScNz9hKNHVrzBiK5ELT9VUdV",
  "key6": "2QqqLuiUfRoVAYbi2qTJ8HVwA7DVghWnD9zDC9xttsNBbQcr3aMHoH87bbQpAVjULLhKAHUba2UWaEtcgk65Sa7V",
  "key7": "MGmfnZQhvcJDTJ3e7HatpbowWRZqNQpxEcf1qLn8MgRmEwaetYE6KbzvSP4buqZuy6xgZ2CTaNMbFGF5SXqwPA5",
  "key8": "3N5Z8hDhZcCTZvt3ESJow9bpaiDNSbsWsryWkBFHUqeWxVbwMbC44zEMYHgtmX5maTGkeiJFhaz5FGKzUskeASvL",
  "key9": "2HgxyUiG1Awm5qcmApQRXbhbZn19NLKtBczxAMNvAixTDYvNrm44R5H1FchUZ2k4zhuofNXjuUoG2zznrMWSNFsH",
  "key10": "45dbGL7BQYGmyWuwARtwV8QXgNHHQtczArf8P2BpGkXKcrVpL3uAvM1rVupxfmJ6XepfAEikxkvakLXFp6KMBE2h",
  "key11": "YAeiU6bAet5ogaaekGJUsZh8LnsD1MncNokHe3Z3Aa8Kw9UrSh3vs3ALhspKT2yhrwgrGMPh7CCmJHfAQjGejwB",
  "key12": "4o87ij6T7evdFwWvbS76ZWUtdrwEVSFvXxiNvDZX1SXng4KuXKNFBX1F46AR957thqt7yALb6QEzhv2pguLmKjKT",
  "key13": "268xUSEzU9MgxTXN9j7sUxnR9yLwW4T1jCmziVo6Qpw33h7cEaqKd7qHaEwkn8j3WnR6yqfgDu9dCtnh6TaEDNa6",
  "key14": "5ToanuCzGZ7oPQi643G8HkZ95pmaof73xtuSo4ByoDnz85djreeKY9gx9gxywk8eVeJRjgHWUXwSRPEt8ffmGGDf",
  "key15": "65yj2Aefb8Lew28JgXjrNGxegCuigWzk3fv7g2j2G3KrUpcT1LattYBu9SxcvDEi13uxNr4eojJE6gHTgdc8SvDK",
  "key16": "2sVFkoirEaWrsf1j18rg6dYym6GMiK3PQppiEMrQbPHun1EaEo78FVcnwEiRPLJ6qqxDaCEPA5uVdehmN5YynafK",
  "key17": "LzzVxLodiJr1rZjFsCNtgxCCj5MAV1qa1kbx4XvpkBu52tvK49teixZDsrNoEwGSDJMTf6UTcqDSeVtg43iCsX2",
  "key18": "2i8qRU7VaoZY5SsGTgS5jWshxDaoRbuFze9WGbPSW2y2x359osd2rKcTMWJtGbDphx5DU25wisTxA4zSxpTkDrot",
  "key19": "2U3Z6By9cSHpCwprSmBJknqqofAsyrs6QSdWKrR4uyX5LBc4kVSh8R8aAJMgFTdF2rNt6CpjSSr6SueeCSBhcqEE",
  "key20": "5Pd54pa615JADoDoTqxS7tpmRaBck8DSQJg6bHkT1tY5nDH5ZSezCQ8nPYQ129WLDB8rthHRJL2sUgB4H2RczQQA",
  "key21": "2tkE5qZz6LADZd11EFFVYoTY3rtqs7H6ZftxxHcv5h2K2EDiyjKKCWMgoBqcGykUnSGZLmyjEHpNBgnjfD5cVmkT",
  "key22": "3KgctZoB8TsYZzKXuDxGE3yYdj9Pv3ckj8gZ9utNsb5EcUi3M7b2p7VLhN59obvxTWkbB76AgGuZ3Bv8Bd9WXshY",
  "key23": "3jHUdejTHuXgah5YeWc2Jveykw5Cq76tMZRvY8VLc1NbVTcw1ti5yFbLNVA2suBzLicgTesbEHxvrSDfjYkesKcK",
  "key24": "3XxTwxWDDXTXg6RLUKxR31GjSemkeYGczXD6QjeEfyyeyTrSmknwb3ngD2FH7shGKqegqucPqUad7ZCMBGykEQxh",
  "key25": "5QCmPuYXTwFzD5Gdfak97Xfc7GEnbDiNYjamkexV9Af9DbXnNbNXbwERfZ2f7eHE6hvg25idZ2KTi2UXToYZ8R5x",
  "key26": "4ep3ae7Jzviddx9Uo4R4rQCkQY4kSBuAubcvP1UxNkFwspb8viM8v3ceR4GotLDpSpD9go2VMCuECcug8rwZBjEQ",
  "key27": "5uUZWEiHyenxpVWt7BGPQZkEVZBmB9Kv5Av9gkSDnJJTqHdfkjH5TPeWmNj78GZ8HtqGdKci5nkfSspZxPDMs5Q6",
  "key28": "5QsoPitqbbhLw5gGzEkFdeQAyQ53MJajM5JNoHbnMARvLju4yVJkMppkFtwHkDFuuVXZkWbsY7q5nBeVdCJWZyYC",
  "key29": "hQTRSJgicAzNCQUagACESn9tYTsp6jSfcz9ucHVyWcX97WtWFg4Yg2ncoLKnbtM3Yzr7hUaaJAbXETgm4bxLLnK",
  "key30": "Nf96VdcRvF31xg7M9sspEe6cK69AyTXoyEFNNxkNBEjxmVhXCjvsFtaa5MtFw92Y1fuRE7bBMPC41y9FbGZvuPz",
  "key31": "518DXuHLjVUXhBPQbX4CBEZAmoqfZmF4gAQWuaYq8MGNLQaPyagtVAo9FENEBaku2CPF5FiG2L3GLYreuXEotaCF",
  "key32": "67VzBuhXVcfBCZJnqtjoYpB7Knr7WXKgBF9tRAhKyHmaRthnW1W8hYqWUzCo7nLSi6zi5o3U65fcA3xYHMQZdpcA",
  "key33": "3eJJpAPK2qjeut9bgxd9EVAGDz6bue3uke96nxzAegkGq5R5u5o2AgztvaPW5tepcipi6NfCopUAvzWRcTdNbnNB",
  "key34": "2hCPvX3jnBUvM3jwf9yRe3UaaFq6ZCBDFf3PbXnvPX7LNCiKaDpgTp1ErpMZ4EASiemFX7ShE2DPXyFy26asKsyW",
  "key35": "2v1rCspUpmLnU4ekj4F2KYZoML3Zm9Ld25fRtmREx1CyjRSfDWASm7e36TbdERNYa7RTjazc8iQ3mwCfMgMdQw67",
  "key36": "53Yvt9qYLfazzDvPQ25xYpHHa5qsaXSJGw4JKBCL6UyetKny11YrrAxNs5ZbfcGiz1ZPqV1gsLApZiQutydZ2VRY",
  "key37": "ADqeCcKRTi4sEWCfnURY1NfuWzTewBNfWSi7DbfjAQQd8P188h3ZHEcnarvzyzzRpY7JYPeZ7YK9nbNdwHm1hr6",
  "key38": "3xWH9WfEStJ5E3DHzGMCW7EmFYGEgWH7f5MgjXsKpNZdWJfphBX1mqpsBwcYhrjtKdG5yQ5f7rmbQzg5Uxtz9FAz",
  "key39": "4dT178zKNETdR2CN4HhuzbVj3kYjpuF9FDm6gNU3bvSh2Eguonye9tHp39tRyDcCaqZoETkafVrAFvYRoTHXwMEH",
  "key40": "4DH92oNovK3Q7fg38UDCgfx9cdwWEAd79AUnyKKNV6YwhMFrLU1mrKBKu6S8tWqcHMFvTQiLswo9jn29syz7fWAx",
  "key41": "87ry3bREdK2nTE3zUh2cYeneH9ioHHHnZTvFu9i9YGUzb3kC5deVm3DGoSuFRGsDAWgreJeXZS1Dfkg83SCQQdr",
  "key42": "dnKh1zjkjdU5LqxyHWyQjLeLX4VEvsLLf3KdL15x2TxmpgkA6V3Bbjwt9uDdchdBty3Yv7YR8LQHRet6prdTZRK",
  "key43": "56q6rY15wW3g4MLLkZriVt44Sfv2tawYiA3rCGhUUDowaoLR4xxvCw81EM11TY6Jyjt2kAVZ47MG1n3epDar8nHZ",
  "key44": "3soRRrEQJUdM3ekwLsK1yp4qnY1qC9Dof6r2YavrEbfBpcD6ARtkbJKKULxW9UNkfotvAxYunPyWTYwd6Vt5RmCw",
  "key45": "4bJNU3fthcqeu94FJZXhR5Fs6DCemxA1g4AUCGFaZzUjLisaKVMU7iRME36d62PaEtTGVqR6U8ALcPWLUXhW8Pj1",
  "key46": "374sWFrEFXBbYLso8KhB2DFZsTYTRzeER36yEJVEWeK6Ab5poYskVm9PdtMjaiNGU7NwesxVYXMRTBp1yV5SuXBh",
  "key47": "S2He5vWiuWjtvRsdffZJU4hKjRQNWNTcr9aeKebMfxqLHwF1bh3Xxw8zrJAc6DVs6bc8GcmFr4RSp2smu6XSUqF",
  "key48": "2yZa3kDBjo9U6heYsJ53i7dFbCXKn4omr6KrH8kMDkhm5GsnES53HmSQGfVuxzV6XJTtcZjtkMBmwWywWuhC7Mpb",
  "key49": "58L5Q7ZGzYKrk1xiuhm7bKsbLLw266BAqRoLiTnLrnea2LZqFExj24jfbxQEBctceTY9uu8Nobp5ozwxHgzC9gUW"
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
