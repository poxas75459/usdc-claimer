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
    "21YZN7LoSpkWRvky9pmSVnucUAwaU1zb1xfWvb7Y8iuWyAryxrcKScFCHahnbKBPSFShqQuS7QVkiG6kzKxVLEHb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dw1c7i7ezptoxpak9YJx7EPz4qbMWSQweAHufuzJ3xpiPA5abEwhKKNN8477UmH42r9TgVfwt1EZnE7rQkkXvkk",
  "key1": "4CZbWsv1z6DR6HuXgprDKukiowmtnKYR25QzNJ34YjUoSkWf8kpPyP2rUxFVtDb1JwF5Sy2tAEkVWzrj8M1B2Seg",
  "key2": "2a7RMesXt237Rt2nEAM4tT2PH9DbFn4o9qWpSbrVjWvcP28JpZ17ZHfxnCB1jPFLy758Ydov6kE9sXyY556P9onx",
  "key3": "ZnUU34inmxxQeor67KFW3whFvw8vziFx5Y1AXjLBv3QErrX8pSLhwUaaiUCaz5sW4vZRpyG1TGKEabCFt6R3xyh",
  "key4": "2WA247uY1BVnKjwZEs6oeEpB44VgFCA9cJBEYyhaHdgE9J9ebJG31DL3YqznqihTSb2yFJc8hmH9ByvEq4rMC5A",
  "key5": "Vmzcvat7G4m9x9qKusNfHoUDhqe7Wj5Rv7TsLicB1McphtevFMf7Nbn3g9t2dPdfo6PonUcSRbbuqQnrpKikXvL",
  "key6": "4mk4KH92TPtUtnEYZNrCyL7ryHf4dhyHj2XXSipCpexsftoxnSYmx1cohMaZReigZPEoXMj3DFnSoVNRJVDfz4ZW",
  "key7": "62EZffKUXkfuE5KDXz9poUHv4biq4YH2Bot94x373HgRsZgUdqq4JUZyZyeBr5ASpSZz6NMyeT2tCde23MwL7vpa",
  "key8": "3yZirwg4fTXwgT5ZQiHD2z6PynRoPkCUjfjZG7UXgvtkD7JtQ1kSSYChmryfcVTrjtmQT8aY9HDaPsXo5NTC1Ybc",
  "key9": "3oHoY1hiaoxjLbNW9fce9gYupYYJDxn2xiw18v47HysJYzg3tfWvrKC96swJFitQ4vDqmpB897h487EQXSmSJGfs",
  "key10": "46KZUWnj8QsDvJ2Skzj5VqQ64qoeTHAKaPyAKyNGPtfpmp9p3EPef3pYcTfYbNt1c1zUW9AS98TtGi64LWB5N4do",
  "key11": "2PpmSSfRy55yQ3hUtbn9dBtBuzsymp7jdijnAHzBbRVaXq1WgrRTYY9EF2ugJCPqQeQCPU28LU2sd5GEK8BWmvVe",
  "key12": "gipBkGWKyLc9VUNuuZCs42d4xsuEcvMTJPkD2z2rbcQn8soRoGckYvkbEFrhfwAgefJLzggoaHYiw9NYhqdjxgq",
  "key13": "3Pxa27mFwWLKHfyXHnn2R2JjsX4wAE9dQfQRPTLHba6gBRFzGD6CDv32GLnZs5FCZ3To6DjmPRjdp6iSqr4x98pv",
  "key14": "aBtm8AWoghCrMWZD4KYa5AWKGoVrm8feLmoeM2UMMxxR6kdJxwUNBU39PyQxRvdJ7xasPGQafsS2FZTEi74yGu1",
  "key15": "5eraXTVCdVjGRo5Hgz1V9BevmSjvyGKb5RhFrEdWNqsnPUjU5ZexD8CAAtpFZ8gsbApjXCqx8Qnx5S4dvTSiC6hM",
  "key16": "5gt59FFxy1L4N6BHFC6XGd8U8A8SYfXndtqxALmbHjbMedWBJhuUB2Vi8oNz6MJhGAwbRjE2LU6dnTvEpU7M95wy",
  "key17": "47uTPcuLJxqFx9tHqw9X5XwHw9YW71bnoJ9SRc4B36wTjLM3jSvXGBEZDdudaJfgwAPVGFBa7aRAZrsCmxhZ4Ghs",
  "key18": "26brbn9cA4XLWg9ifqdC2RoKLdRQd6ERDsRwuxtLXAppMKEyYVivC4etBxw2DYDNtahT1t2t9BXFJL4PZsbKxvjS",
  "key19": "55nJJKdgWJDxiGnwa8JB9BeGntVQ78YKfDWFjSpS8yqA2fDvhpJKzep3K4Sb9Cbm2th161swJk21BUS2Nw5PYZN8",
  "key20": "2bRCqLS1ZWNDhDunahtv9tWA49GRrELJTGLXnTExLCjbGFrnGCz2Lzoym4oEB8Zz9QnjUiXTDmPoYpKMCUdPWjQC",
  "key21": "4UfVFJ9Xi17xVaPrJ6gnqmHj2PQNt2MqAuFc1ELTSKyvrvaiGpQYfakUbM1QgX5i5RjVeiqYJYNEaAL3eJG25MnH",
  "key22": "2BqkmTGruphrzcqN5KfA7jNyetpYaPqvea2snP8eMCoF5XMrY1XD4PJ5KDkQmJo5pqV2mVo6gDtHSfV7s6uFGX6m",
  "key23": "21a79cUgV7z93LW9PWyLVcDyNkQTq3wXqZYnhP5UDa6NShYpfg2ijskyGvJhQQKi1h8CN3x6pJ2dtf9Xc4gEz43i",
  "key24": "5rznT2dGDCYW2E57E8LDzBb4JkdgJ8aXueeYiBtUCaKH9gXKPxgDQ7yywBSRhDTTgbmi4ZiMH1emyfrZExgKQBTZ",
  "key25": "4WuG5J6HU2bxgvDi3xhfjhcg8wF9KaUtyMivkLXooLVvjoszmTRKFjZ3dxFY9g4yNscmJGfr4FYHxWHHxPg6djPK",
  "key26": "5YGDb2tq8tpf732dhhsJ2aXzVzDh48RvFie3JP9EvoQMXctEkUSaAmqRCaV8Zw6Vnm2e9AiC7h1wQwdp8CqQbvTx",
  "key27": "4SSzz5xYFxqc2ZpgKKRaSr7sLPUQRsMuNPSxkQWLANxtWh9yt4WdnL4zzLeGwm2d9ins52bzaKBBQrWP1kXRkmSY",
  "key28": "525JQHm9PD94ikNTcmpDwBjE2vzA2WnhQQveUjGzoHUH8vxSNu9MVmo3UiweQ9WMjqkxJ8JurhpyTQ4v1LXDU2uA",
  "key29": "3iNhN71aRdy3b7sjWYeVWEHJRqxPD9ye3n2BhUDgwWBFkW2AkBPFyiDP2Jfd2UT7pfQGeYnPZcGvJTdgTpep2yJA",
  "key30": "2WCCFVFteC5Eb6PgkkxGmraBETLAoJ67MtMi8bgpwjy9Rt6oZTeeXSF3cGVfoGhUjZo5Je3KpFgAUUApzpmvZeSG",
  "key31": "2p6LdPTrkAhbzEhS6cf6dx6Dnx1uyPfkNF3T18daGTTCqFgcJKUXtDm9Uc6QXZU5sC82a5EXckWAwBaCtHpspAng",
  "key32": "uvtzwHMvCK51NH51mmVLswdE984XFSWj5UAYvdBgYYoBoaY2WyBSorM744MpJiwcgUNd6NBdHPwm5bFt7miqAeo"
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
