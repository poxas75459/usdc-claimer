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
    "4zQ2tD5BMmvmZFd7Yoejad8xW5EsUX62nj7QB4pGMQbHpQTYAieYMcBacsFoyAyvxtbUaG4pJq7zUNrGbV7rKMNv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SU3ZWZhAeEj13vKi43KA4Wci786KCcMaDRUW9RUeT3j2L2YyJYcTfmHkDPS8ufnAuka6mn7Jq3utLPK439YqHVo",
  "key1": "65DiC34mEknJFLvrFAvqV7AHbHHqWMgSyfAEzQK1m4YYyobe5SsXjFeeF7X6sfqa632bEgtk662C7tCdUKnoBpqY",
  "key2": "52zLLuys8ZzSRr9j4iWNFcLvkjeMk5bZdwXWwQ9N1g1KrY5Q7oAojpDUVU9LD8HWUa6MrJe2Sn4BqH7AhbeDEHx9",
  "key3": "56DeRf5MSAwYWFbDppnAAqrETaaVcWLCn7mctLSZsQjrauQ1sHKSQ5Z1DLZFW7DKQ9MApD7s98bzi4qMQn6iWtgK",
  "key4": "Frvj5vpZRw5VSHAZpLcCJ4DaTK2hxctdE7GM3Hh5cvgJJik3wtHuFZrCXiTNgP3Bawsnd38wk7LYHm8n22iqLwH",
  "key5": "3brLYr4ZrMfjvc5J2AiwyCaTdKX3bqxWUYGdC4jBTM6Z6J7i7Q6cKaszRFuNp7gsAx1Gfmv96fuW2f6eQphsfnuj",
  "key6": "FCyASXee2LDkDa95JqAKGp5rb2XMsuJNt61NkoBrBniGRgVggoQ2ZJ8EffooThsVPDi1A2vfsfU7JB2EFHfLm75",
  "key7": "5jFHRmPXsRuqNs6HDKtAp34PC9CLbz16Ao2g1mtaJcW5AQDQN2QQ9krvQWuwagJZpRp8JpLZTUp9S3Xw3gViP7d7",
  "key8": "HQAbUjemNr336NMxME8nSEqomjfesZSrVfC1RjdXW7SMskMbcJywfdaiJCdRTHWZkNWXJimGjR8Ef8QH4Hmac2X",
  "key9": "48tDinDMc7bzjSkYd7cPdE2GJUV5fPrgTc8QaWc3hrwB5MjtjqFn2WpWHxAUQdZgJn31FLYaoZY2CxbTGLP95BZD",
  "key10": "3huGDDHxnhVeWW3PSDTXsU1WGMptzRzYDGmRqiMXUxHc7kxwXxBxAJL7CrcDXR98JAkUG2oNa6dNUzQLmZgb5tCp",
  "key11": "5BZD2yRospvHLALaHqkW6akuxiNmn8Nd1qLrCpjgVJqUe9qkKMKYpUyrSMMNcrFrw3KFixAizCz5PeWRBRtndH2K",
  "key12": "5KJzbsgGM9auypHcaxrzQpKJyzn2wPs2YRPZTVCV3FYY7mbFjUjNGYbL56zZ6diEbViviYmu85EwtQ3XGHx3iRcC",
  "key13": "5ukne8CxMkTGBizasmMf5tT2PnbxLzzmzy2qNq6oM5UKaXbfgRBNJ18w7tKAnZmuGujjDhtTooKcYdaQT52eAvMY",
  "key14": "5cDapoeZFyC4xpnwhVaVRL2wsG241xV5c8zQLdzL8ckGrxM2AyGptiz1LahZmbsLcwct2oZvTRtG49H3Z9f54iRZ",
  "key15": "58UacxW9EY8ommyHmeX9rd1pRfA3QpbTheYKx5ymzN6wPyo57DENr7fwu88Uhee24x9j1uoHREQuXHdcBVVeBF89",
  "key16": "9Sm9yit1QcDUVea4kZKogZAFhWvxJB6apLhkf7xDD3PSV4hFHdvBC77hCJtwKNDKNTeHCKxsrUnFj8EWj7uXDb8",
  "key17": "P8E7zinnX26AAx625dWBRsrok2gMb2PBuSyQ5gy8LXGYLAdZTpzVK2psBRYv228hYam6o4aHdUx7zy6rcxP7kbr",
  "key18": "y4JCSDvanEYLHUc7hq4cWDUq38sn6fHh9YdNvNVi6BB6VMnkSxXqcxEi9LFKS8fG93E4gD6oUJu9C7XLFHHCUwF",
  "key19": "54QnGSYMja4UXTJidGq9aiBviKBsLnNHvZsXQ5iCybQeRUKXajoC451z6fXw9kXLX8cqGvyrp5Ukm1gG6HQih3qn",
  "key20": "4fnsTpVKEZzocEmnPd1syBfzcM2tGjYwxjyBrP5hTTgiyk5QrPpbd7hDCY2NtjacBsnPY3hUtorHNQATeiN7BkGx",
  "key21": "5S177sM9e47YLvBiSRRkLCFkF5thoE4bHfFXkGWxAva9C9QpDvHqTDE2xxcoyecTsnXAb3tBeYrjtYFCebsPvocd",
  "key22": "oC4Nphrf7dboLdpUaK1qLSpG7dnkwPsnEoYsBbKQ9yBVfVj2jdoFaBbgjKi9VJjczhHheqGErQxqcYtWAHuDQQ1",
  "key23": "5L8NURYm7Rxjywzag28yeRKWAwr8E6hh8VyRFFTcvVfgWVRpzPETSokYG3gjk3WYfr1zbpZ4EoE7YE6iDXTDspZV",
  "key24": "31Zm6cHbmCi58HR1nJ6FsoDXwQ5C8x25S5A3uK5yzvXdz3hSWemMu2sPBxTggCosxYg9b9PwaqqukUwa1go1LxNu",
  "key25": "61udcq2WMKpfu19r9h2H3qMbruxtsKXq5c7H18Libfg5DRCSKn2TfQjUwYEZiRZfopM3hUzov6xfhpUhu7GHEAra",
  "key26": "5TYdYS85R9ZLEKjPNRrgbc8P1hfh9aTQfZrbjXPkGucreQvUhDbtS7yNTGNkZH3zkM1xxddejhrYSftcdii1RVgN",
  "key27": "4NmifsLm4DwETBCUtD4p73V4pAepC1nYdP8NV2XdfxVkFUZ9pCuXKf5LgVNwYLUEvp2dfj1zdYaNzB8RKkLFMCLM",
  "key28": "5Q1MZAf2Bei6rSBHTNCjfQTTzeu56vQLnMti6EsDUL2DEE9e8e5rbAsvCXtSVaa8EhARD3j44HzJ9Mxa6PmpfSz",
  "key29": "3WB2kAVAwVkUVB96H1iNLvthVaCAELiwA28NfLP3XiGZL9p4yMFZ6guS6wsqU2LamjnKigXnYcaArdQxE4oWiSi2"
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
