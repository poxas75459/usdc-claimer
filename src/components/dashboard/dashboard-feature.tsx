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
    "3aC6VXgcCA8KeKYnUHVcccN3VaNwaNhoPJm7bxpk8BwQGzBPBhcNxGMbjChbPgmfgH6eBmnWRVgbbNaBxv4rYqW7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63A9z2V2KEXpsRNNozMVDmWRpDZhv9PGdNU527ckxoiqH3WfMeskC4wGZ35JxRsxuv2i1sDJsReHdf7X8UrnxEt7",
  "key1": "4j4vGmtoSFsp4Nhkewc2Zont79SZu282eV1SHuFE3mDfE6SA3oY9sTJKJXJnbPAE9M4zC6PPfUSg8TnjUzyAxWmE",
  "key2": "3SiijanjpgPDYZthpw7DGKAR5hAUTQ7BczXvuCggpTWWnZcbFyLdLVGhJAgP16URgie3GTdRtKk2WTy4ddgQ2Cap",
  "key3": "5fojdZVD7XrPzohaaRLgzu28k75DaK8wfV6EpmcAZuTs8sTLGmJ4ogotxp2Uu4dnqiePKwJgkW4JvWN75XARoTYJ",
  "key4": "4KiRumuDb4o5jxsqYsigSgwyoqtg3hE8acFFtausF6TssXLHfRNkf9ci9jepxhUrZzDzDyxWDhYSkc3RkSKrdNe8",
  "key5": "5PUncCNyxBm9Cz6TxMM2U383eBKgcyKtWZnku8X2hUp84uQESErC6jowa5RZ5L2PxuWujCqDM2wx8uqvzi63iAda",
  "key6": "o1vhW5VGf3gV9HqgDWEuwoZHcnx1sdPftB9YMzomZJ88QpLqX2q69EiCZj3TzB1yFHCyDDJ5nggA4qRgNf98VQr",
  "key7": "3dZesuwFmo9XngqCq4NYXS3rgK47jyDd2HXSHpf2xCVLgH2vuF8C5E9oL8EG9NFMyGPEgUVBDdnY8FQP2bnWoawa",
  "key8": "9jCVWXJZ9hym7ZKeSmWDPBpe9uQYSksgPsGduaSgS1sHgetTHVp5JtrPr36xdQYBZDXpoBKW8Q2y2enRq4otiH8",
  "key9": "2BnUWFUYEntb8AbDaaky7ET3fg1mXgwthKATokLjZ7NMuubNKn2XyYPJ5h8Bu5qjLVaC4Yng1kBgZKGhdSYV7m6X",
  "key10": "2nUQLNUVRF2FvxZ1yNFs2rrBG39HE6jH8o9h8KTsGPzGNm8vBn72sCfbziT8mq4HejVHqRSEhYjPRUq2tp52Fgr2",
  "key11": "3Hx1QycngzARgpt1YMntXy54yLAYqpnL3CYwDXfQMa28uC61Qvd1iDPnYy5CE1WQ29AbWkkBsfAdn1zor2ftD3PH",
  "key12": "4RDeDrtN9SwMUfpb1EF1MWGgKggrHA3g2BqzYotXqpGiq7aytcRk18R4gRMTaBGUb11LZmhuC6fby7LmfbJp3H8B",
  "key13": "5ydgSqf5nCzv36C95AWvFmZrAzhFFjWCc91cvQSFrqGERmKfx5ac4QSkT2YarroGjS5ZC1rMgdbzynZFrubDSj9Z",
  "key14": "S2UpMp9b6ezQHkCVXthgUiuRkiiLqjREJpevCRbcEN55zgtwW7Kq5tTNaTXQVyZ7cYMVWySSWisr37eavpDBz5Z",
  "key15": "3tQVp3tsNT6Sru8LodWRRwbpo3vaGzSVhEMLAseXxEBZPGAv8NttMZ78cjucTr11yDpZuBANASB1u7bRs4Wc2DN5",
  "key16": "3GgBeSj5KcwQ9anDQyeY6tkttX66qFJfkVq6CAA3A4CMY5rSSKXrwSzCzatimD6WtMrWLirXW4c9Vu69C659oUz9",
  "key17": "xLcuqBtfxp85gVjyaBdF59PwMyUdW5mUkrwc2Zi63gUqM73VSs9BWfP6aytJ96NkNfvj4QJ6xgiQw4XCpcLfq8c",
  "key18": "32qzLMk5ZgiQnCUhAzBvJm6hahhuJcLH8avJc1pgHVLhM33Qaf3sCKWQb2EpdXyzNQryXbeLfS7as7BvJaF6WMyX",
  "key19": "49eZgdWpfdXhW5eeieEW65Pw531PpzR4MUWYnDFxNTuxEZNLb559UVd2PK4nRTVysDNUTBQuLKfpYCeNez4Q3JVe",
  "key20": "6223xwmerv6s9xKBqXEGrQHhUDpZJLQcvwSgmeW3k4D6p4QUXSHgqvH3TSwA5US5NsKFR95as8ccixKTA3pztiQi",
  "key21": "iQpqynx95xL4nzG2251Xm3axqfCTgXwJFpTrpoe1gpNNaH8ZrpfmQMy6fXM6TYNvFHMBW2hTouNfGH2Y8v5DnV8",
  "key22": "4gHCqWBrc8AxzV6eaMUUfTXRg6wocwyiDxVPzsBqdUD6XjFUYHcmVm3fvMzs6kTDjJBK2gpdwzxCVucynXBPxCoj",
  "key23": "246YsnFkpuMXKjCGfkipGskpaYWChFKY55i4SN6jtnyTRDghNDQKfBnN8tDkwvEybw7KBsMqt5VhyeMstDuXnTLA",
  "key24": "4DggEZhrfSRxSPJLMFxBmx5xeEiAnuumvKAMrnqpRqgC5z3dFTzRDgxYAG1QpymCuQ8ZYRWEwST1WwtXFuiV8sES",
  "key25": "3dNd9Snv22BFYyhQDtb4VCGKfTswzkBAQEU532ew7noVPCXeaoffRvEo9oHTbrZ9bjN1T96Ywg1AUpaoDc4mjGDP",
  "key26": "5Ro7Di4t7qLvcuYgQrFQqgxePrHxk1rBZGuExTXpcYVA6VF9W82NPD4CoZUAF7WQHAezoG8Jv6s3oY1v4ehE5Sg7"
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
