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
    "4Y8pwXwSTLqgZszvDLTLJw1GUsxwQdebpWLEKeeiHfhWBuCR9ZQV7p3cfjn4RBQkGtoM7pfDU2ty9jbv9rKxCK1n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kP7K7TLBjuNuGB5dxtofn4htt4UsdC5PgzqHgGUUmgg5kPP4CtcxKiBuAYp9FmPTejbsk3DMhFNA61E6aDZuUQE",
  "key1": "3ZeYCpmujAhA6aEUVEwdrYqFVXKm8AEsc9wkHpsLnA3iwVdw5M8MEPVBCovMHkKoz4vGcPXoGJ9K59rnmgLNYD8C",
  "key2": "5k6ZpYLjpTA5PzPMcuncZGZGWT4S8auqAGAadmPQbmTNkoF9vHgLfVjC7hVG7Un5bReVCJ5xyxep6RyHSRZdo6oi",
  "key3": "KcKAwUxL4B72NoXHTbgu47W1BKf6gLqhf87RnSJxiCFsA6zTWDygHRrhEv5dSieWsa7x7igkJkcfDHvogNBDobJ",
  "key4": "4RHMdH4h1m6FpzVWXS6Ka58M8HKpzxZCSYTELfAEqR5pjeZiJP2GHghm5HMJE8uoRM3erunGEnNLzcCSs4hHwKWN",
  "key5": "4WgMShFaTJfrTsqJGM9itTDbu6wYXtmwjYy2xiy4Uad7vNF42aq4yao5spsbrLGWSbi7dw6LRm8Uou8q1RoTT55L",
  "key6": "3xHtfHz1aEGrHAfvxHpvqvb8spWwvuHsSExeaGuD5FzEKLGDdsyNMAGJ8Ut7P84NTvKafJR6oG4D5vguLdwa4NpP",
  "key7": "4UidjVRKzPsEpSvh5pLaiDzDdcB6Cj4JNcSg9Xk8tstUBPDwS27Y4RMmi2fXkMzpnKTdTAc8nyPwi6t9Ng4orsBF",
  "key8": "2WE9Ubg7Ha4Xz5mgVhiABkDKSGCXK4vQ1D1nMQ8HWMWW5XRvd2vWT1ntyquQqcgjYyVh5hvhaQ8qssGUTfXVQoPu",
  "key9": "2wNifpiMv66PZHCBd5bjRwKh6ek5ostDzU3YY8NWudechJyN5ytYsKbXeZ5FyxEywz9FpmZEsgxZKoamgAaRQWvY",
  "key10": "CBFSWGT9vEgXaHX5RPgqjzacHCncEAptRdXSHCTz265VpciPcbut87b5BUV3NtrnBsPbPEWfnGnb3mjoL7fPH4m",
  "key11": "34DDFVjKGBruFJtygFWs5f25sha5huRbhvqk6cckPch7YXVnobxM4SXChdPfWausoBDV9f12sbHKHMoEKgDHqx1J",
  "key12": "5SVE5Jys68vCpGUqAK2iWFDsEspsnfR64ifFWtB6QRVGHfXrh19RwjYmFgdf31w28P4Htn4N4dPbgU1NLqyLtKLL",
  "key13": "Z1JreTXrFDrg4szQh9FSyyvyVUKzfDL7qnnSstERZLtvCExAXzstbaBT4Zu77gXL9LjVgb7BJwkjiAExeFnc1PS",
  "key14": "3r7oKzPNw7MNEBY8e9jLUrYUsehzfsTQREUHdEmviLHeookgtSCY1inNaZPzPzVvvc9VY7cSTocWPL7fStMG2KGT",
  "key15": "3YUKvSgubVNng257mn6KCTENv6wQyj4ms3BFXsx8H3z2qZZWX1LNZAqrKk1Axy5yNUeoDCpSTnV1bDj5tkkiNbDJ",
  "key16": "GsnCCLVDzYWMA7dnX3DKSSH5dfuNxLkR3RuojYWzwuDqJsgDzxGnb5Bu831nnQvK28es99Rk7nyFhBrxU3aMVmH",
  "key17": "2gg9St3xhFWit2WYSs152zBmjAL9qgRPmegbdkHXbMRNdqCTWjQnbxFHzPbriWTdznD8RuFbBYEDvbSkA4XNv4d5",
  "key18": "4cYebfmohrLXYupJHE7AoKNbQ2cpigAtEaws1aehepGm4rR6xcwnTRd5U2AWaU1abMWFxpLThC1ViLDoko3b64pM",
  "key19": "qYiRJi65sPBRRJyZ87yvZyMyk9LsjwmBx11MRND4g3QU3jxystKFvDWZCr6ujWwZiKXVLyGhKJcvczSAHoYdy3T",
  "key20": "2kPcdgEuj3oLCpAknZf6q3B9SyB8vANZ3U2WWvXrCwvHe6iWqsFNJzGBRnjT8jXXwfd9SA4BEZ3xrqvt5iXp4tnW",
  "key21": "2eok9SZDxGjywQbgmH5vxTT6f32LQC5XjUsVZqeyVN4Mo6xgXM9YW4Rb5PjCHYw2y1apHzH89U5JcotBXqBGGQPq",
  "key22": "5vminj6K9WTw8bNpDgypqjokR9LDGMx7jvQ1isEA87qTo6BBfUxySfwpxXn7frWzmhsfob3jSja7pu7YCUXvxwnw",
  "key23": "3Eu4TcfM7ciUWhAJ24aXKmrZnC4BJRtfy9cP6bx595BPo2VY6BCFvafQyAAtc6X8can4ZaQ6BgifhmxnbKWeDXfM",
  "key24": "2XrnWZLYb7w2XysH8Bfv1AEdeQEtCSRTpUundYJqUfqtsL1XkNRyLAHvTPRQ2aP1eNWmk3xRjeyo2wkPo4JwsHUv",
  "key25": "3KWZkYpr58kB2Ae7FUKx1jKsWF1pnN5XTH2oxU3moBLmZLThjTUqXKAjXRJ7B3QKAa8UR9MD82vdYc6xuFssUHwS",
  "key26": "5vtMbm4jZRyRJLSbtYr5HorxvYYfsRLtpDd1Cp1ouj9KB1QHdVwh3Yc26K3taRd2F3P3CT6gCgru9DxEXMNMTcVh",
  "key27": "9v94pmzQUHDBfkr7qGGV5ntRixX2GqerSGNvfTFT8UXvuzhyYSSd4N99STpfGESrPnX9fNaGTnU7rCGqecuZiEy",
  "key28": "534VJYq8HuQq8p26gidCkFEAkgr2EFWEQqoc323YtrjzVzfG9yN5Vm3PAWqySzUEZDBraGcjbZd8g1MKTkqEeHj",
  "key29": "KE5XUtwGMjvHkdagUfE3GEJDevt68ZaUbtbxVpbStHpaLGi6zmycmF5eVvuCitTbPEY3w8EFVWHsNJxpG3gy8HR",
  "key30": "2rjn2RmJmeoYM88Tf4DPw3NbKTKPxbYEcwx4NZa2bDAHmpopv6bNVpMRNydjcJNT1Ur5FP6u9hT46vSwgoPCzL6L",
  "key31": "5by6bysWpGQ9PcqPQZKxsBgD9YGukHJ5wa6cDPyMfxEPmuAeWW2bWTDwzrVhGLXvA8MpBTaYYfGRJo3qDw3m5Zx2",
  "key32": "2jT3iYrT3mCMWVFEBjbf9WHcaBGAmaW8c2e42RPE53XwfABsECZwh43FTfA5FrRsEsSAUnRYMntsL4nUqStd4BZ9",
  "key33": "3Q3KFcWWQGLsRbM1CJun56sQUtTQ7ByMej3LpbHzDfA3aC2bKV6ZTrxP7g8E6rdWYLwnog4yEy2hnDxUhh6UP1e9",
  "key34": "5atx4w3LouMzwfqsHL9k1YyvSRqAF1diQxKMraxJeb2VsxpuMWD3GdeW6pThvKNmsgnKq8dn7xia7cozRzGXJZhT"
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
