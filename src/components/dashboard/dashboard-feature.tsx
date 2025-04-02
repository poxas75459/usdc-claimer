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
    "2K2s2dB1rWz9YCqACj5V99yNfRfwJhcU1d45paRYkkmDWuoirJ9oNMU3k2kxak6F9HQKa3pi86VrvTPLrTn5bNy3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JaQbSUyjWan8ubee3Ap1yUrCKmsRXrpaCxwWweECbWCZ3Zh8EvBokUSBiEQGCYv2PJD8DCKeXzsjiW6G4cJQ1dv",
  "key1": "2s9oN7idKqqFg9GQpmm26BMLiEXPHkyTJ1Xt1q65h85t9sXbS738tEUZFxCF4k6VViTgXmfKMbtByNp8fDfH3xoN",
  "key2": "2SuRW4uWZ6xxohfYFL45mUHNdeiCyVhm555zyQLEzz1mrKB29P7MumZXSfjSkqWhghbjiy6pXZoCe4wjdgxJyxpo",
  "key3": "3ptekGosmUsNPAvLvcZ4ckYMMWgcufRqqvTVAJJ5aCcAXtHzrNJgwoxpxJzKRokswB3gPA6KupMecgcsNsWMFVK8",
  "key4": "4dUveN6owo33ms5ie6WV7mQP4mpEoti4m21MKne1SAYdNeV7hJwpW35nySpfGU7Xs46fTGAkhAmKJRzNgoQo3YkU",
  "key5": "2LrfyFhQnipNyGCMs2NxtPUuHv8GkyMmP57r5NKMX1ziDRgoxqjTCLZWkg3ojmgT9ydLASiGhn5d321yh8C7GNGs",
  "key6": "4cUctqKxV9AAqMFgnf7TcPQQc6s6NiqGXdkU8oWofURadmd8B9X4vjTUet32kp6SfCMJahPsYdpNLcxNgBULLVSQ",
  "key7": "Doqwc94zimnrDuMBkdfHe9h8MdUdMbwZL9myAyTn9ojwfeUSXmzDwLaWWywCQKB5deGaBvCEjZ4PYpANc9v8odj",
  "key8": "2CruRLJVwCgnmAzXs1LdzDE6r6ibMX2YbycgkmMhUYzDRaEM77eDdZtiGT8NCGuB8B6foiYPL97KciycfbaEK7dN",
  "key9": "4DnEy3KyrhAoBko6d9RuDQUZz23wqxWgAmDNnnXx2Rx28xR1WA7SCfC4Kr8NTznbVabqBcNBvh43ZJVSKfHYPG3v",
  "key10": "5WCmyFf5cXomA57p2bCszYkKoowPspt9MLd1phcGQxFVA4Wj8ULFvHLFkNXRQU88NxDMt6VcgugKR6vSEyy1tQKU",
  "key11": "34A61Psvm8sXRW31AtsT7DCtGkCMpaFpGGfQeZezDfRp7HXTgcwrZe6dcWWhzqZHwgs4WtEQMy9h7wdzoJPwB82B",
  "key12": "379XMUiHksEDpkocpmSeXoTa9zk8uGSYdoFG3JNUcDefA2TUzTfzJ3huw4DPwkVS4fHeKUGwQJdmzH3VKpnTpTH5",
  "key13": "4o6t3EGvptjtbAZjb7ywg7zNNZKfrtjS9txUXk5gpLJagGdZrPJQsH5kZ4S6scnsA6sDHgeHoit94ZBc43y9nvRY",
  "key14": "2aKj1qyp37TZBJh3sDPSGQuasPHJ8WphouEGHfsS35w1fUar7a6XDq1WXrX6D98KbiJhKgK6FjDyLRv8Khb5GYG7",
  "key15": "2YEfL7dk4avMT49kLFsYNtdNTgRrBNkiKZTieBxdoX1W8jchrryoAnjqd1mZsAHu1DrgtEuwNjhxBV5noqmiU5rj",
  "key16": "364PxVqUrT5bUjzZwm9TrCff5qM8kNfrh96Gg4JdPeyksbHDbBrrAMB5UxHDzrNeBbZW6aF1pC5MouPQjybmV4aU",
  "key17": "5XXsLbgKXmd8fTFRoipW6YCJzJqmL9DqudtzNwTaieK8JqUbKtjsa3nuxRjwL3AEFtGCJNcH2DmeJpSLVpojM2Lm",
  "key18": "3xozdhfocurCXfmpXwQZ7MHaq89SmLGm73GkKcZr1gf9bCz6DueFKUPSqXtqR813hRoR55EQHer82BsgF9rR3U7Z",
  "key19": "GaggMQQHNVzxxcN3YNYQYrYEUYtK3DyNJoKS514byetnwQGVmFoS5iUtqpCg2BhJvjQxXfUXVkK9eTZMT5opwmu",
  "key20": "2o2z8Vv1Zm6icd2qqYhhShaDKPiyJo9p2HFPuWCFPZWw9tzybkHSDRawVUSKBfigozuNfe4g1bzrEAQnQbbFmYqC",
  "key21": "n8JkFevWjXKkTkru2Pk4e753zUT3x3G5hynf4UdsoMjKoaMmwsJ48haii8NhU5MB7Pyqk5d7ncjSvsm9iEGE5Cz",
  "key22": "6uupyEY3dAwDSg4Ts6mfQr4agAv9zhyCf3kuKE4xm6PAH3tp6SwgpukmAf1ESJAfUDzXttfZ4hMktfpW8pgSzCG",
  "key23": "3p55xQCxb5rdT2HpV8383DDQS64khPvLSLbk3JqwYimiNCAK1CJKzeQKan8iqTXwQgE2nZdtxmfGzdGs8ng41N1a",
  "key24": "5QQV3nhkvHU2X6Z7TtZjMNfGvPoUQ2y5Wbbujqs7dPhomykMR2Ex8XbEgJToBhoa7Gqg6yPSGUbwQ4XrYnxUGLh8",
  "key25": "4eBimgQmowfjVSDn5okbCct5YZxSgfMKbxyedcFFEzd7rA7gN1HhfKdaPrJowM3dCNcgREMWSujk3994DVh4TGv7",
  "key26": "5WLhDufmLD7goAoLHYwqfZEoVf581csoUyUX7RAerypuporNywUeS7qNXDZL7MvvH58oynns1qRFXD8myUoownbK",
  "key27": "31VgohuzSKu5qHKfDtrmBMDDwX2iQA4FDhxG5sjBDWKpP5vcSUyVKrGTRaxoN2YZ2DFUtczjfS1xfKKk14JspmZc",
  "key28": "3ayywCyzXR8LbwhSfGcpSeFDSUcypryG7Db9spmXEgoKBfu2JjZREoSy48mZGnNgLo4fKVPur2cD1YNDybkyXGkM",
  "key29": "3q1tdVopdGd57jLQZWPpapGykkqxcm8124pGPB6XyqQvMb8Uc1Jczje3pbPTQ1B3Tau7BBMYtb99SCDu8iRGGrhW",
  "key30": "643NLtStuh1EPjVQyFE3wZu6x3wq2QgAVBnoFkxDKVbcYPgwgfaGt4DR1wMagKw57AerM3qfL3HhseHCARb3wHd2",
  "key31": "evCrKdA5v5JJmdkkjDRoE4TSCqfapwiqCCPFc7Dg1shmTuyakmcecYJwcQzh93KdCKSxtwFjJXVWUUMQgt4i1ZU",
  "key32": "5epo9iyLAHAxyKsABqUnz6oUuC8hvy6YFegma9jiR1eq8TxMskQiEqgKZgGRxz9Q9BD7Lkf22J2a9v432kGp2tss",
  "key33": "5JoshxK8BFLP5Va5hfvbH1L1kqoWEbyNHLksvowhFmwvcEssswukGyVqKjFQu6evX73JvaowfJEZotkas3ZU4azp",
  "key34": "3v8zmfsiY5Aa1eKnXdnPpNgV4Yc56Pf4NebmEg5QcYXtcxa3WrQMbndEufHr1vBuRbk7qLgW12zt2LfQkyWhWz7f",
  "key35": "4Tmv2hAMcnjsxTxHqRCjJyYn9vAXZ15NaatcabveHh6BLoT7CyWTC2VFJEjoBixU1sgS4wDxjqYVvKiQAU7mCM2d",
  "key36": "414CzUg7EydbTM94wVmyUXs8W9EwGajKMCezCfDuKeVsdevgnDDS9kf8Pz3xd5VX7GSXYzVFRLUsECDknxjsTqcm",
  "key37": "2KFNDFrrcMsvoXrNkGhqX6vtau8Pp958KqmK5Qf195958H8eh6dUEeCj92zaXwvviMTmLRPcJuPZMCDU4u3FEuWT"
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
