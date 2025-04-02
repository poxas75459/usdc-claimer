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
    "2912iymsA8XUAXKCbn1xT5bw4xEm1EciCfaPh4KAR9PdacfMHbEqnSCfA1Mc51tKJM8K8haUXFNJLeD2at9YNXH1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HNq5eW4kzWDDSXJBZeLiHvdtBq7jetpNy6anJVuRvTiv4cstDMMaoK2gTQgzMuH7tfqQVNvSpCWV4GyKYM7CqE2",
  "key1": "66KLrFphbywwXfooTcFSqCzVMw8g5XszehewKcece7ZzMWrTBvMUUvGgkfepDCRFmhNkPeX5h79VZCvqYp3LqhR8",
  "key2": "YzhWstExnRk5c2ZWcDfRBBaM4vZKRemsfmc5KTGtov8gDcbb1h7cnKDKRuvWCQUCTebAHN8c8hSGiGzpN7FbLyC",
  "key3": "2QsVKdwovhd1UKGrnhNeYocQ5duS1yVAoLqD3HuWtjkx67U3S5NURYU7BYdo9QTjG3gccfhAT6cpDYUhD2dq9tN3",
  "key4": "3WxxN7VGU6NzvAYtnZT6zdeEWELPRYgTLxheb3f4EtvvG4uM2NC9ra5AYUksSxT7mGmsiit6bumXohkkk7MXtWPH",
  "key5": "33sBfmU6GBByEEMsxsruihbS3gF46TssFFnyWjSugn7W5PorK4oiT1Zd2vLGm8KADAMWPHvtnkWeVeto5KSwgGsN",
  "key6": "3EpNmB6PwhkHfk9DbbcDAK8YP1cv3nD9Cth7gDY9MDj7bQewLqCp4JYyV8YMe1CDUagkCjEarvnBit3LyHZmxcPw",
  "key7": "2eh8agZT1834F58uxDoc8sLSu5A1pAjjSt89JYBM7Ca7zbhdZuw7ZiEP2qwzpTScLLmrStx4BpD1vSkmLNvjnLA",
  "key8": "5q3EhimFsr71Dygapd7HgYF12ZLZTfHhyogfwWdZv5pwv2FMU1VouNsmteDvhLWYVw42pnqCNYfnBpHRhKCKLaKL",
  "key9": "4DSeSWV9oLQWVpXP6joFamkd5PaYnTqMEoFg5TbwR6LiZpNjVVgWuMhfKjAUZqCCCCJNm9u6duS1uWZXGy5bTd1y",
  "key10": "5djVXq5F4HK1vDZVCcBWEMvYHodTbgUXzTjoTD6pSTyLFCR1TF4Cc3JZT3VTcoxRugc16kEwTMJWgD23HdNS6tYS",
  "key11": "5DXPsXLqRGyp6DAi8quJJ7LjUSKt5Cy92u4iThbckMUCYzLgMmE4tVGawctzwMaMJMy26vr2wTaPpL2EPneyQTx2",
  "key12": "5xnG7G6WPmuvr62RVj6vGEB1qiQ2FNZ6i5v85Me6SEv8q8ZY3FmnveBbgNDfeiGktGjs3KpQd6ytyts5yZdU9z69",
  "key13": "3xm5QL1BZpk7RAvgJZkshR7V1q5nv4RCiDeMTXCcmD4F23QZyRCWsjS1oLETZJ8FSydJARoe9Coo2htQ9hyF3Pby",
  "key14": "2zX4tTL5udfXPGhn88KjUmv26CrsgTB5rqFP2p4qsUDUAXtrpVLM7FkKUvhtaa194EMmLTtHyd9iUZrciva4F4sg",
  "key15": "4Wjxtref8mCUwV3c8RmWBzKpadProRy3wsX6tbYMPFNsLMgdNSVumKGaQdaKRjMnFucRzop4NeycDnzXeAD3LQ48",
  "key16": "3VJzPqTFSGSk8s9x37EpPbX9gcjSFYDzEGYspXFUxMqHhBcFp3kXCtrz6a1eZSnogP2bs92QxDSnXT2cxSWUoxuY",
  "key17": "55jtHZzFiaJtnEodGkAt7mbzyLUGxJhrktHz18E2nM3vARzFEabW1gTk4YtD1Ukb37hWYHPdkiMH2UNHERPGdRDm",
  "key18": "51xMa661ydZcyHFPqbe83FDPHfmAdwLY6Aw9aN6qKMAeaabSRMaPe3a7T6TRGFfQvnwNLv5AuC4VM3aipojqEbzP",
  "key19": "41PMNWuRx5cM8NzrDsbsAwMdzETbgcppETPUsWGzc7vqwSDXWGoKK4mp3FrC54qKdU5CTfyhTdrkYh4fDqpCE1cy",
  "key20": "47jonUScADRLQiWzhxT7J7w4kCFoUM37Q7hvxD2w4UzyXT62v4MZVZsLnGyLyyFVkyr6KDGVmEtdsy1kmfWKGhnE",
  "key21": "25XYN5fRDm4iQNU8sApzAidiwncdcwswTGmS63sVfcQoTsSnZVwh26Bti9vg7Ursvb74P5wAdDw5RaPQ4VmEg4Aa",
  "key22": "DeXnox6nmUUjTJeAvoChickzMiqneFszxrppwTP4GVqKFD8bhp5SgYYttqebjJsesbFbfVBV4pBHsx7XbvPftky",
  "key23": "463Rtic3VhKUYwkCJKLsXzLKFiNVETdNpHowc6cy7zCTzLKnAn82C8Zkyz5avcFwnwRoneE2effjhFirqfNjeh4f",
  "key24": "3SVccHT6PtqvBA48WtTMstubeCwb6kLAn2VnN2ccFdBiUK4WD9i4SogpW4PJPwYawq2FcNso7GTFpGBZBXd6ABBq",
  "key25": "5inRdWJi16tF3Mp56i8Y8EDhpKn5W4mjySZphEZZMfFi27vcLJCbuydGhcFNezRE9PpkDjCkEQmY84ZhYDxv3Kzb"
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
