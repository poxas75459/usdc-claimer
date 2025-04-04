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
    "4hKBJfjPU7htRMyctp8kXoDCmY6qMUFZM1DpZtWsVnhNLSgEVcn9NgxbydpDJ1eCYuXCEFrCd7b8yJAfAWTxQnep"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jiJ5UFS1kdNkxQYTzaZKYXYgoUHE7xsRivkcJ8GLHijZchrPzWBL8DUwJY236eSGsHtA2mM4bTgptAtt8WxDdHj",
  "key1": "8SHiqVMcEUKMjidqocKk3L1a6QR23VU3cdvvvsdDKD3WsTG9BiJv8rNhBbcbXHbfYicb2Qa1W7rLkMYBK9ufTrt",
  "key2": "5BPQ4VG1wTE2iS1JypEkrFaj8M5CjyCR56MwnNapmA3aCicuaP2Cfvm7vxW2aokxSWSuFMBynpdjnd1B4b5BhRro",
  "key3": "hnoXCkqjzRZtiXMeJDrp2xEnXwqY6BvAct16W8tucZnyQ1QsejtjoR4PBk9WaAHWC5LbQmH2pJkog5LXyfxmeEH",
  "key4": "3arYaMiEDEWvtqt1VZrDY5U66dxAsKhqjuLeP5eXTGqKnquzmJwsg34n3MtfojhwpikrippwpYAQeeMxqYFdwTmW",
  "key5": "5uAGDmJBJZ6SJy6Wmg9w6iuvtC6yq8zkUHdDZmLPUgugrYr49YLDjXSZwtTXkeMHom5QPFUw8FoTxrz7MhznjtFe",
  "key6": "3n6hViZjY1Wx2ku7AVB3iu2jsCUG83XoLRF2zkeLYAvGXhwehJxRfwtUtN2GSwC5ds6pMrpqqZfPPsBZwP68kYdL",
  "key7": "3NhtmzS92uvGurtFiST4kAweSd3nKHLTD42hAXhunZeYjEoW7BYHnwM98Sf2wRskT3ETf5Y8SWBC21QsM6zWKSaK",
  "key8": "5BGshkRqmyUw8cq4GyFZvTPJBrDUAS1EpCHMpW59L7PzeFfthL9xfQyi7iqSSnJvAdiA2WsSmrKuTwpEMpJzVSsS",
  "key9": "6653LsgDwQVS4VFrtsg9ZXY5LMwpo5CM8J4hk1gqd7Mbc4cD7fm4pcNuuoE84scpmJajNuqRJQdguurAbcLJs8zS",
  "key10": "Ykr63ypcFfBGMZMx3GkSjtGAcDL5dby17fjKhFdg1Uai8zvU2bJkAjnZRSp5qQUgqexyhVYmpRuQ2FUhC2aJvbL",
  "key11": "3ofij2h8FdBdX2pkdDW6FGTQwrAegQh1K3Snr3jhN76aoG2LCEVWagAozt8ieNyLiddbCeCt1wEeRx67JN2GWKet",
  "key12": "4tVaBnismhdjGLDBzjWerdEP5hrvoAfiaZ3V7ap3KH8EM5UgsZesFqGkMVpCVTnsMc2KTWVotNFeAk3XJicwGmVF",
  "key13": "25gHFeDAjJsU6fKVLDcNgjPpGhTULL9U7nUpBwDkwpueUBjrkawCthS2SpHCcFNiNrjFrrqyVQso6qP7xnQCRwTQ",
  "key14": "5K22HdDohE425D9cjRVH1nbXKC8JCstFhpdhE2DhXEAbGMZSiPxaDkFEqfXUnG4tuohTFvkHgkdtNUj6fDmobdaB",
  "key15": "3mqpcbanLdoGCpZww6quuL1Q5CbiDQZowaUGfnnuhVkJiPfVbcRukPXi7AEXQ96QNXDm9XBhfYgMcCyiZhazvNUh",
  "key16": "4qe8yb5odcSbapUp8a1j3m6oaFkFHw8nwpgwtsRJUVMJ3UF1SH2qu38oCq2y6sWS7CVAJyLjsD9R8LFoHC71dNHs",
  "key17": "3KKnnpKDWWf8ZGWTbNtzFJfM7dd687SMdf9YuX31xBxH2Q4AXArNvP6zHWx7A5d38V6VZ7PhzKhwFGzGEr5fUG9x",
  "key18": "hvsXaZPANoFjVvbLNbU6gSP4oicjEMgMUZDTgDsKCTMJLQVTrdjR8g9ZrZvrzmTnkpk1ZKiHdKCygmCdVq1aFWG",
  "key19": "eGU9KWHPjPnEdLBHrMDRLp9D2D2MAMNgu1GUoJD7Bjd5NdyqjSLWG64kr9p25jqWbZMyXcmyohWPCJnefWzyuZE",
  "key20": "41iQTHD68N6eNS2taxxjokgnvApFU47jLtt6KRpAzQxN9RGJoWBxbbar8AreVckKdjFJ6K9XMors8aKmC1QKD5D9",
  "key21": "4ovbyVjA5MvhWmZFW25XRKVd5nq4zFdjfg85sMHzJqEBhAq87Vg6pYyTSE3WQY2srAYULsX59gufHHcU6tdBcm95",
  "key22": "d5bFnzwhfEqhZToG4qCbew56h5W6Jb6D9x1ATWwQPAFzHKpZ7qLqVf72PkVV54Gy8xkK4a8Ri57cix7w46HFhGX",
  "key23": "21CathG6dHf2g7wGC58LMN8oda6mXeCYedCvKcKPSabPUoga5yg5fN3gFGP1iuXMsBfEvAcRYcEepHwcnvBy3Doz",
  "key24": "JG311NVQYEnxmsU5pYX3HDsKM5KxB6NQE8BDw6iYF8mo7uqjZUJFgKnj25MAMUP6agrxDZqT6dCHK5edwucLuT5",
  "key25": "2wEYJuX9aRdqWSWmMZkSptfxi73xBSxDuNgA1wvHGF9mCY9o3tsc6YT8sXZDDcJUS125qV7arLv6mnR9Lkxh24e2",
  "key26": "3ETpu7edcmfiLNGKoVPRAgS9UY6ie9pZWcsK13fUR4oziAyXbdRGpGXSfzKBgHSQMqsPC3FtYjwp18a1qg3NmhqH",
  "key27": "3Nck5EoQenJVd6Svet319MbMAE5vrVXc88Kt26oP3kC5jT3HeRMztbidVyRFxuhhSMXNKbirQ6dVjvjKpP3Rm8iN",
  "key28": "y8uM8FRXd4miQwy2bV3KCogHY8fncGpeL4wdM5yKu3ywx6dTwXJ2bpqw13xZjXQxHesFmJTSFMtrgx7qsTXCzat",
  "key29": "5kHTcuGYPqyHEeeumAcWcTQr8qC4M4SBQq8JHeLsw19DdbuuCmQdhRYDaYk8KaLKGAxrpCz3FGboDfw465zUVZwV",
  "key30": "RsZU82sC9GwK3EF84FnqpjmppjBMoYodfPcPtNyrf3Ss4BQw5KgfDoT1MrSTCrgz8LtXH4KAGYDQJHVgCcPYqFZ",
  "key31": "5ZpdDC5muHW8C9U32hsuGqxuk1ofykXpyvA8JYbU1Qzp9JYkTr3NckeC22vtTknCwiuuUbccXnh8HL7oTx29YVCM",
  "key32": "3iqaYzC4NocUJYa5As797cyPS1Yxcak2ZhwixZij97HS1y58dgMHySALEhP66ggY4wVWusmL6XPQBfcfgSux8c9j",
  "key33": "56LaUkdKcex9N4dXiUbCog7r6uisEc6diM5CgHG32CnJbj5v6Umk5ZzVzVUN25qXG2FV4SMZrBvwUjSbMCnqbc7V",
  "key34": "5t8dGcdgraShuUvgqgEX4hedJ8VMTujnkr7RYvc1pLTw4Gvvr2cekCV82p6mGH9qwGtUihZbipL3BFSpuzTtzZ82",
  "key35": "3ZKtX9pEUyabCpNpak1oTWTtpCFj11LVTjSQaPVqQjmtP8g52vzuBiubLB4iWxfFFN4V1mCVsKnwsNWCCqRQJdjQ",
  "key36": "2AXzZw1YyGfTDQHnCB3XYN2tWibVgWszoG4s4agmMJrckBZybaz9XSEVLzxrDUFU4e4CNi2xoBK3DwBFBEWPaVt7",
  "key37": "25xDtw4msnZASJcGeCTmi4UsZkjMuP5cQjwbokKb4r96m6sPUsGyp7vqSBrrLD8oqwMis35XraTERbDxQ9EJbtJm",
  "key38": "5gQ3B5vRamzSZC7JKMkRw7JkXDhyrTxRFzxjECfoSjhjj5D4AUG2Qn9yAJpgttLvQrr4QixGM4DSNQLJwt928KEb",
  "key39": "4CwqbPuUzAcMCwioa3FUtH5GKQGKdkuDZbt8gujkYKsVZtCJxsBpGZpybVP2V2oeH97k874E9J5MsTSG72xRMW2a",
  "key40": "UdSwXpqDNAEjHcrWDuFRba5UXngNBBUva2MtdGKBRNK9vfEEeX2HUof46qfDHwR8GyafbLYatqMycXL76AofxwV",
  "key41": "2K29KxNycfK7D7Xs9MVcMdJEjPYXVVKUUenfLgfDfTQpfmCcvXXQ8wjDv8nR9psjukYeJLiCszeAhJDGtdQuQAaJ",
  "key42": "67csdCnijxJb2P51LTGomkupNquAFySUekjXPnhCDXW6mGhVJsdqprnHmuZFW4t2DpYcCPaUJcqtWmqKRDBRibiP",
  "key43": "2eFdCgQcsfn3GegtUfBFuJNTPmX6V8yFN3QamAUx2guN9RHoC8xQzSrdEixdE8iYiRhfNjv9wbQV9AVMGQt86HRN"
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
