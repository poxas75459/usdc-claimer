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
    "3XgTpD1CfvwC5es2YZL4ArUb3FnXNWF5sbopjPY31azUvF38UbxjVDLVMz8rebDHaxZ6oVzSC6DwWksuFpbXGW5i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iwukpGBzKDuro3EMkKkshZTXewA6Pi5bWxVd51RzJHvUmoBfvSw7Mc4cyWCR2aPmbVqTVPMKZVTp5jF6cFBjcov",
  "key1": "3x58HeC1SqjWWXv3GKn5A35iKzw6GtbLb23xLaH8cgozJW6vSZ98ZUhXFuT1UFEAtozrmRZwhGhjQNLtzrqgfwnw",
  "key2": "r27T3f7WLXhhDWbDU3w7TswDDPAdUowjapwXpaJE9Jah7Uqnu1WJwLc9gpZnXn2mH24U4sEF4QqZrbbCLHvzCie",
  "key3": "63WfrxYWRfB6QF626FT6s5hN7zZmi9xuTCMD9xp3eefWUinqDkSrhM9wJ1aYNCCppYaibfZZpLw3xd5GE6z74EJG",
  "key4": "4N7TdZ42FWNcAcuxH21cL7sBgjjkLrFrU8Y7TsUCHgkEQMqaaUUEtUtVQUvEnZqQcRY15eUudn2kQY9BWgsjRnKq",
  "key5": "rmHhix34rkh4CmhSs3jRELexsvjKhKqb452GKSZKbj1i146YbLqgZVSfCLA7zDjrRW6hzggrcZ6hNWeBFvEmgtu",
  "key6": "4EWBG3PHmxga2xnnW1feDEHrdBG8QNKLnDmFkNSUogPFir9WGgGitz3gq6q8BZetp1Lhp5HVwNmWaQcCGVTb5N1z",
  "key7": "3nuQiCE8jHpB1SxXm2WFc1v58ZXtfDmgSeKPJvygydpTs2YuXBfdWgkELi1kJ6SLsXPDi93p99nQMYRkNGACdBRb",
  "key8": "5hc8CtcMp9H4RBWxgssUzimHCTKxiMCKSz1BKr45MMV3Ak6EvZCdZcnQEBALATnqzi7KpMoH6LNJfK9WfyiqpiHT",
  "key9": "qtEhr4wLZyANoPepp66FGx6XwJyBinn4zMmrPXqWmX1BgcQzVfk4PfhjAWFe2y3eNZew5qFj8aKenRWHimo1FXx",
  "key10": "2pUJxhAjNfUmpThjeLj9sMTv1PBSYUXviSGEjsQxJ7TMUW6xGFhFCNggjuaqLqppCE35yCsztevscB9J7Ep2QZH1",
  "key11": "2t5BR5ieQ5Txgp2jMqLQQwW4bV4BG4jjEFcENwex2bDtNQ9JdkCseLujrqUZ4MpJLj9wsswRU5LBf9ELhR8rAtrk",
  "key12": "2bcNmigxq1dp7EWXNFEwcZvc9HKZEM2GF8t6QbtPVoe9gzzyWk3Jm4oJWKHMF87zB7maaPd1Zos4L44H1UJWmZyw",
  "key13": "5edNZmKYfgu8ZM28z7FXnXW2Hgv4PMBExcerVu1Vos4imDSJENvRGJsgNo1SoeM1WFT1783H3togbvWzoUjNngD8",
  "key14": "3Hp3C9TQM7VHvB1wnmoVZPpjGujsGFV8qsddGzKCtTMGy4VPAKz21hmMoEoUViGEAo1f1pNCLGSkxFJmr4EKrwQE",
  "key15": "3jPy7iAJejZqv9ZnqPzdePNL7zhN9oxpGCfRPUDSUssRrqinhKcznBEYwVL91FeMmgYbukuhSh8jgzBMd1ijA4R4",
  "key16": "3b4XiK8zcK4UZPumTNAPjrhCKpWvt9scAJwnYyo3k5nS5HeAFDhcqTAzidYsXWeUP2rvx1mP2Woo6AsCBCFWVovk",
  "key17": "8TCghQ2Q3Y8KN5Zz6eShb3vbfiuuPo1vRmyNisMMXrdZGJAkA2uRWSVEY3UctFsHa73FhoZr4Tdea9PfhnJf2ez",
  "key18": "3UxyYqLKFQejskUK3iiswjwK5axXL8n69wVATt69p3aNSN4E18ayNMXpC1D3hSWuvPLh8YKzhLRVTdqDt4vHtpXZ",
  "key19": "5hbbfExrCWGF7r6rJf3UjSkoHCCbLiNziTvMNQNXqc3jK84Tw3ebyYSFQM8Y9jwZZJ8X6QTGqAV19DqQR8GMdWfR",
  "key20": "2XEi9Du1wXNNN1qVyBxxgZochsqDcKq8dcdbCF3nw5HCP9EEspoj61F8xNw4MdR4YRYFRXSkz2xsBTgpLZtmH5vM",
  "key21": "5z5rgsFMq98KFJ4CTjbtp74bH66R7nigWqehLgHzt3o9YyR7zmrBk7h9x4oxv4KC4j2LW9vDX1V1fMxXmwX8tdbU",
  "key22": "UxHE6Ca7KfWoMNJqZ2rvUf2hyos8ibb5pT1qsfxgTZYu8jtWsvrZSSp8GdV62jd2QLd5W3WorqetV9kBZ1MKory",
  "key23": "2iwKBawaWcKoij89iroEYssLZRaZcbfrX7J3i6Um9bVk682EPcCkzaXjFUwSfraDsHfSzGad9nDh1AwMKE2ULbrX",
  "key24": "4KasnEUtisVVmAV8eUJPt5gfcmPFF6rrP8SjdnmcFV5eyzEJGV9FahquWwAVqa1JTtjrXKp2Gay5ESUJJeWxTtFF",
  "key25": "3DfFmd9Kim8P32378oKxuRwpxH6gPyTHwRK13mJgRM3RwMFF4FYYoTbFkU4kwck7TFovFwSgPpm5BJk1ABh8ds1a",
  "key26": "5SrNi61RTaAfcfwpj2HVdSD2zahXmSDCm93ZLVMiRvQYgEBF6QTN6iS7Gcky1pGEEFxd8XrMd1dekjkdycXqq56p",
  "key27": "3QUzXuCMaZKEGWEpTErJ1eE1cdrZpZEVYpzCWiajWHhqbG1yq4D2YGthpKZ1FLZ49yVmWu3wARsBMLTGnqRBUJU",
  "key28": "4XYVd34p3DKm6NirNbD8pqaAJg4tvoiLEZqw3H8sPiSRV46L8X1VSBaLjCr78pgSHM2tX7N91y6YUEMDTFh9xqoh",
  "key29": "5YxcE7Ss4idYztbhhx1f8xSUTrVuDAZ36F8xjRSBm6GFKMdJTrLsyd9sRHAUVSUyUFvMo5dXFbgzLCwLrW5C1z2b",
  "key30": "XoHgBi93Zh7v46swrwJVVpQ7KV25J5sRusKCg241CVrAHS45tJLESx2XiWomonSHrWpgS8mR9FBSuce1AkHz23x",
  "key31": "4vxWEaqXymgfJWgZ62YvjKbrtgEcBk5811k8qG5AGiuvxmczVpcSuFQRAJQ1Kp94pcDtyQEcsxTeQmU5pk6hpxh5",
  "key32": "2D6MvHR7HEfR6s7A5MzTkMQqvpDjnZcx3XVymRZqSfkTo5LS4QKqHPH2yJnLDwqG3UtViS6yxdN4MPeAAQBoz2re",
  "key33": "4cGDL257X9npdSTQFjmp2Ja7B8XAdhbKZrzdmwF7eBDcTkjnJFi4tV9t5D9YhJDm4kxdwzgZX37mmhxY2tdu1BYp",
  "key34": "46c7WEPvnZVwvuBFaecmR1VDWBBdDr96nFVwhyL2aGaaHJk1RoNyz6ZJKAt1yu64k9EA4vVoXrWh7t4QahmFftMe",
  "key35": "5drYqqXDebwPMQ6BVUv3gqwVVQ6frcLAtgSwqfxhHa3NxNsqdJdiCQg5pH8Cz9V29ekvWHKz48QiSMnjHTQWX8Gv",
  "key36": "1DXvJ8TWJimDMVJJjc2kUqVh2bBeTwigVtLUQgqgi3ZABSpPCyk73v7GoQ93u6F7Cvfrpbpo93mPooUSCbNP59s",
  "key37": "3Py7RUKwmT6yQKtXXVDGTDSbpYoohMmXFD4V7p1VaARhnCfo9YWFuJgQW9duBDK49PrQ9DyuwChvcVWk42Wanso",
  "key38": "2fc3YXNc5XkaaNe38K2WkSCiZ8eLn92GfPofFSWvSdq5iKud4ZWR5Q6pNF6ezCHb2m42Wg1NWKC8W1qwi18sQxVa",
  "key39": "MP3FWD3Kjbh12iqeYSbmiVXbw4Exccvsmbj9vDMQWy36hUu3jyWKzb5nEa15BLjvZpnELVQmR2eCgiHyU95eHw4",
  "key40": "67m9ZWGwaARcrHbGDpDgmZiMBRiBgJfwZ5461JAMDetqyLXA3LLUEKRGiEYRZX2bP2rjfgtgqSixk1e3txFG32wb",
  "key41": "754jgcYyB9HoFhYWtFsWi1kDQJ97oEP9DptdHNoRyURnhVm3L85FaZPWECFCsLH1XAfwCLbJ5psQyCxtrLiqrCa",
  "key42": "4bbrHf6ikFVxcdBLqLZsmSGtqDaV8BhLFcE5fqu5hM3Z6qi57JidbCrEc4G1W2iFTzGhCQoShgv29XxpwN1WhFfr",
  "key43": "3tPKw2vKxxorKzJqrt4Ej1EQ7LpTrAzn23fCHuDRAE1ryfqRJznMXWewBV4GQTVu2Nh1u7CLmy6PLapbKyV9ASRt"
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
