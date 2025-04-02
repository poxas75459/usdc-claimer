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
    "5amMVcersPC5ZptewRuxsMBytjmayaRh7ecoZJVnZU8tkwkecSKjjxVmYRfRFen9UbrgaZdVGDTdQaCoptnfFvRm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CbrjtmgFKoErecUSVgUgkFfkyf4QNVuuqwpPmvfU29eW1hVabhCG5r2Lpc3LmvxCfmq4jdWe7vsMEEwT3xAA6Yb",
  "key1": "5QF6zbq5ByiiEJXsdvqTwbFhsQef1iuM4363ZuYLJN4z3DxC4GJaXJMZNCtTe1mYfN6wX2fRv5xKaCRWqE19NeEn",
  "key2": "5D8GGoFrJzHr3KCUcKuh5vri1Mv4w57QsQ758FA3yNxc1ugujD1WXXeWySgcaMEX7KvKHpVNbhWJNQAQDN28C2GP",
  "key3": "5kHXidEZzYd4o6PSVBq57NZQLEpvyAqQJhfSgzsHBrXjk4KnLUkjM6z8TDiZJAop8cRJfkuU4emTPFv6ircbREf6",
  "key4": "5k6Amq34QeD8LX1Rzd4V8F2hwGaVGWrZ1b2pc8WgbS2n4Vkij2YeXGyAyfYBGGh1uyYipGonoehoEHrDCQ4tTNJQ",
  "key5": "4kqvW3vEugJsSm2FrWB1enNDq5J8KYXhptrDmu9T8SUSfcdrkKWr92oDyi4jB1Hfqnzoau8YTJomeUZodTpqHyfe",
  "key6": "5wsmrfNTFbCWydpiStEBL2ajR7a3n2nEpFuv53BAjNLUmpw3DUDFJ2zvdyCAwG4yLaxU75xEtmTevpbL3s9DCxvq",
  "key7": "494hh2e7J7YNjxyzLrBisRPQ3GaJe3hDj7a71wwpLaU19rF3bjbfFe6Y4Mtbt5W3tgoQp46fSeoTejHYK4DcBvS3",
  "key8": "3D5sCioee6g2KAscKr4mfkDxRtAEMvZRtRtaHboqXHp9paLUZwA17Rwtx78ZfPu75geyhfsknrZssDoe9rwtjruX",
  "key9": "5Px9oDpT2HPAcUesC5YYm4kkmSZesXQ6RNxFma1AcKYAts9Dq6cDG6ewJ97xzdM8KpWg1v8CG3u1U1Z2S9hmsdvu",
  "key10": "5dL4uKCKTcHwXueurYD9rW85eHPUb5amrLyxr6c1wcxHRvK5fHHaTsvPEVxaPJFpRhnWTy5PJbGV4PDju5VpQYeL",
  "key11": "2dHsSyyMskYPWbz7DRkW4bv6nHUsP5bQRnnVZMAeagC5Cd98WuwCFKyAnf9s1SZ4XaDJ7QAFEhtQBA33Be648m2e",
  "key12": "YLFMXZdgWHaVVcnNQnuEqGJrFfxV2PjEJBpV4GrYnzyK1FFxmBrfFJnPWicGxaAb68cErqa16E8g269Qk1cHEbT",
  "key13": "PwY3oze1kTaBY3dC8e4JgvjX2cxwfaFZvynZ39BGqW7A9EuBSLaGErGQ93NGT4T7povjATTecKyA7daShf1EoF1",
  "key14": "2W2nPVamdPcYnWT5CBhRKh64ZDVrC1mN82YxYskiSwSJJWthKTvcKP93wHQJf5YnuxsKXJQZeW1XFbctPMiAwYSw",
  "key15": "3XhNdTYkNaaK3cifPXmCup6J1jjj695LBwrvaAFdGvNsy65pAsnauvG5Qj5yXbCWHEiAjr8zaPtfnhHFwxtHuLnH",
  "key16": "2bMBMVNtm1m2DyVv84A7esUqDfw3kaBC1yAQ9YwH5P3CoPbXcC4CzPapkDLiqfou5AuCcJRLfkh5pJAa4yioQWEM",
  "key17": "4WLR7GA5bJjd7i6bisngSk4nABkhJLKXRxcMpPQLFjYA6yFXpsUDE8skA7bpXzZ5FU2ZzATjdCKfRqNe9LYsKP8Y",
  "key18": "29kLymxKiUgajTtDMcDbUi7hwd4p5X1c2Mguc86A56wCR78YUyzBGk256PUMkrd9MeTMH49c14r58FpcbEExdH8w",
  "key19": "3z7ZMx299WQJgJyYTVtZ6umThQJCW45F3d7pgYaKqtkAgAn5ef7DLFa7Mgm4PosMa4Go9sY1BzDDi7k3rKHnU1Ly",
  "key20": "7HpZV84aVVitkzXr2PcFpJgfAGSTxMEHBy6Mnee3VnKQzFcd9j7dReDEHiUDiWVCU8fV3eBh3TxxHGWBKHawwsX",
  "key21": "4HFpsTfw8XBdAWNVarZrMfUYMpoiTtM1AEkNhawu6L4VAXmKeS5RATemNEETeJaKC4JKDZTFLGEc1FzBXHk8dYd4",
  "key22": "4NzNJBB7TfExxuazhpD6GrqzKkmKhqN3XeNwKoW7CqrNXnuhZyi2qVWCShzE7Ugo9oPQGrFBtMow8aUpzhyi5JfD",
  "key23": "zuGitZjCL3oVZaA3Ln94xwkLqqqAnx2rAgSdpMyf1XqzRXZHzRfQo89D7oTv6tmqwkDwZyNE692Ts3YnzXYVWaN",
  "key24": "2pyj9g14dXyRcccWPs6tW3PUnjghw3TxoxaZd5fVPkwNiawPemLfgbRDbWQP3EdAvLmsUmr25r7ZHT7gvBooRBXi",
  "key25": "4QK7rqwfFV376ktK57M6Hxt9FopgW2tFVRFWrEkBNiVoszJoY3o8tr4twYrm9a5D87aJKkg3UAXvT37DoKT3sNWH",
  "key26": "3BZtGDuHUkxgjLzbgSrKmtTQzfwJJmBg6os1pnW1swJr2nL5m8sf4bcdSbrPEDEDiyeTyb51iUpwxEuG9WAmNpXy",
  "key27": "4mJAscm6MBC5HbQmHfdRWnz6F1tzFzggRwbK4LoRPDWuAVDiXs9BRjxq1URRGjsmZXahn42r8ASEFYqJvW83KoJt",
  "key28": "65XzWyF6RR7Y7znzRWCdM74njgkCSigUznrJ1sj5HV6JAUXUHbZ37u7UF2ZszprWsMMfsjM7zSTmvZX6UqMeit6w",
  "key29": "2LRYTX7FfbeDW9Zv6wjxgaZxAbHSRkFwufv4SudYLhAENW1W3CrVtf2kBhmTtqEvU5tD7eVWo2ELHChxhGsK7Q3u",
  "key30": "4jtUPnBnqXKLnsXd91Mh9mH3XGoQwK2AmW7yiFR3e3T6ToNh7aXTXu9UQ6hfxkoXnAR9awSs4LmCTWSLopG6j3mh",
  "key31": "F2naupv4NuZBRAsXwFxSDDF6zYZcQovBNUAoNEwFWwgcxSLmfGDK7KU1wrA5zYfCDaZsEr8umQAGqLqA3JN83XE",
  "key32": "32EmNujnmikim5eUjN3XPDeKziqDoeyZBu6vq9e9g7yJQrfYKVLJsB8nL4TaDiuBhjzJeaq2w5SHh2FqGmSajiRp",
  "key33": "X8vXi5ss4jTjR4aBr55ck4oj6Te69FFqKt2amVNA5e7GAp1aaQM4GU6mQ8PerWG9fU4fervJtKF7xRPfQPBcfMj",
  "key34": "3Pa314CbmHrCQKSsk3nDYTy6yB4NXSAP5pyYk2go1QDBTxT1zyf8VRmw7LPtoBJXrY7V4ubCZ5jEnKR5bgx6U3cE",
  "key35": "29ytPzrJ2viDAUi78oUEfSJWoUBEdVTyUmZB15PPBxYByEX9NYZCJ3pc3RSxSqHXQEWDthLSoA1WFZrkwVD2WvGc",
  "key36": "57AoBgi1LGWMs3e9iCB31dw3YsJ4Qh6J5CETzo4Jp99yXJJRAmyejwiA8jiLhS5gXrv89nhaZi4bAYvssAWRp2ta",
  "key37": "5Cb8adBWyYjJuA4WSj8QkqGfU7ScEuX28UevkNQ77Q28NVBViQRiDQM13Td4MZNoCDtET7RPiJZcgQCtqUxV9tBZ",
  "key38": "3AR9nB33ZLneqekZsHNXvvkwMVxXsgrFNntFjn6isWMfi7agPtJAiJwFB6F36HwN7AURyKvkqKSJh5muzJmfZDvs",
  "key39": "2XejBRjuA586LN6e1MDrcun6kVNMcFbJYL7yNKzadqo3zSfE12sP5wjeykKLsgp317PTHGi2Kh2NG68ApjwgpyPK",
  "key40": "yV2eZPwEMQeoycFWfW6Yaz1NvtWd7Bzb5cUeMQzf4byc1VpZ7qB2M46fuXGpgkMsB9bKMiQdixP2WGDjcuoCQWp"
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
