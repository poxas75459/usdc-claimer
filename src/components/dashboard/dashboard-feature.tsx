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
    "2LqBtCcadyQBJ7j46kkcvE2i3uYrdLzxoDGbZuL7BrCgQCUuKz98Jdi1JBgAMeW7EvhRHx2wKEFUXpzBwLHxh8Jg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eHYoasotXq8ppxd2wBec3KYKUEoZipVEh1ViRSLTWkTbfLouFxPPA7yCQf5MoyQcjyoZP2je6PoeUVXAs5NqoGU",
  "key1": "219i9EN7qoCVacb7RdU7mkvww6qe1aSuA76Q1eQu1ypKnuzkZRBcGw4nqtoCRxMMdXwGNnDgKpEZmEGG6PenPkur",
  "key2": "3pJty94kFQHMW2WRgYs81U7ox6CnE7k4axBvXMEKsdxGFKgBoSzkSjmGjsv4vvjZMCHjt9mUL31BN9KhxJJBAkzt",
  "key3": "V3D2eDKBuPq5tp1pwK5kE3n1rTaQAWBq4jmXNKHUEMqatnjvDLGYWbHb1KwSmNHoRspZRVgmkrgVbQXeNeo2Ria",
  "key4": "2t5e1PRQ56YwsMJnSzLbhW7EwDoBFPCHdV61GxZcjaiYKSPGvqqzXzxGRnBFcADx4Z6ycTnMtD7vDaZWysD1ZvKk",
  "key5": "2WNLCvfu2gxzJixC2RMrrgmau9STvDWt4KEtj3ZDs5DVMt1AfLtw2kmmh8KiUR4T19uSaZyoTYNoRxpbkMrPNie6",
  "key6": "3T9w8sZgq6ULsStEdHjTdBq4uWbtii59JUDiyADTmYLK9emehRnwFnQvAYL78fGHNtMU3zNNVgJgrsx1kMaW79WG",
  "key7": "5eYQA1wFdKuGNTqj7BCjiUi2oPdAEhUnhn5k24CyNjvGcSfzNWkVgJrWBmdtN9hDrU1cVjfEkVD5UsEmW8pWjSJi",
  "key8": "5PWD9geR3VbkfCsJiqY36xLWzAZBXaHX6LDh2o7AGPgKYKFHiWswdb9zEyiEW5kS93hLMn9ApkPt3w2i3ptMFi1j",
  "key9": "5FptLa3LNKyMCwfKpLsTdxAfK8dX1e1Q9TAbG7QxqjQ3TtUHVbiy84KmyqA3rbmcSV4YLwcpSCeErr8iVkmbJ9st",
  "key10": "2XcbY4HRwtjdrUeDtkXT3JLbkJPMemJpozXCkUDtmLRHV35Y3fjBknHmgKHfb2apGXfhMfA1c2MSo8B5nUM2PeHk",
  "key11": "3sHGw3mjvrPAqG6w9TfEzvaW4H3AGj9sh2KrDtJsGYZQHKGSTdHba5kQgAb7g6zc5MKK28wMNKMb19pq1DBtJJu3",
  "key12": "scxpV2zU6Ha9GE35dFt2yPsd2ASwoRGbQ3p3qQdBVsDmKwW6b4rwF3hiBhz8pzqgSu4LGKw47gwdsYsPdEWJfJC",
  "key13": "3iTzgubCQGr7QN26a68K2QQa6x25sFmdxgenUJZrEvig8W5rJfg9AX4TmnM3CmpmGVfwhned5978RvejRaBxkqdJ",
  "key14": "52VL33r5Jp3y2rCkyL46pqdu8Ki5dQzTbwJWNpkGW8wUUkGA2j4NZ3XtskTD7M4UgU7KsanCCoBnDi2nSyzedxpU",
  "key15": "65MjXooLcx5UWujsD53Bt3LEfQcZeW36xzbsAz2H4dx6wAA8au9TzGHtWkbe357gUDctDQZLnqMUqJ9Sp2YGpEQb",
  "key16": "4gKMazuMpWnBt7SQbzgN52rk8VNkqtBLJibJiP79EjB8YvoLiqwz44c1Xoy78jyi5NtexUr7cydZ9a6XaRHUtJqg",
  "key17": "5LsPL1tF9n7vUnfdyXYFRcXH2Q1qt7hqWBKMZ3Y5zGDdqFTwZHToKg62odDFMRthsyPVqSMibLMGP1vbkQ631Unv",
  "key18": "MRRYLmDDy1YkQfk7cVefcDMRAB3jjU8ohkKtYXE3sno6vM771H593LnbckQPGyB3uYZXXccJWNgmEZuKknE1Vk6",
  "key19": "2b9xmPwp7sT81nTRtRPQaLxs7sUrx3ePFSVY2DMnEyUTavmz5Qxo3p1hdDidpqfuKnfbJxgAkvnpcPEo18QCvTTq",
  "key20": "2zqrLgKKVqmnK2sx4hixaCenEVpGnZA23Y5B3ckwBvNoJsvwbBzec5bM9bkbGLYzATgrTaDDUD4q6Fim3UbD11iM",
  "key21": "5hvHEFVgxL1sime1deT3JALeV5xAVycE8d7NyrySUuyjtZRaTyj2RPZhT7yVtwXgbb28Jig8zyH1XeQZ95uo8kK9",
  "key22": "3k7SwDisd5cAqSmYNFk39pLda4vhFjwz1UGGwa2Dxr6zUj7K89naDL9GUvBm6LA98yFw7MFAHpvH6U8W1uVkkWdj",
  "key23": "25HFy7JhpHkQujTjYNMdwCxoAeCc73CXXRQJgjsjtU2tSeCXT871L2kB38AAqQ4ixwCDMTtUBqbh6SrH8Ffm8TK9",
  "key24": "2aqX9PKKzZveMyCkcTn1MDonmJY8k4NrMrX6XWrSEd4nA5JwRVdqrGDJRQece49utwRcei7MRnn8sS6ftdXErRiN",
  "key25": "rMwRBpmQFtAtDBUHpe2DoRWkbtnh8kLVkTsaXGwpAc27nGeDWKSFWNEB69LTucxEgfUpeiG2jyg6wZYTvMGBnQX",
  "key26": "2HQXdDfXmY6hWS4dEnDcK91QNm5ape8Dyk4wQWU9qCUJrkSmZdEnpvdcbEKhwfxqZYheM1qwhY3Wb8CNhoZf4Mv2",
  "key27": "2Nfun7yZ6T77vkLPDQr2LPVZidHSpvNLjmQ4ZMsG11FbMuEyoreskw9Cho7dLoB6ukB2H2esPX7LBaEcGxh1FhpH",
  "key28": "3jR3ZDFXE2tsH7qiNx7ut2ju8AhSpNgXrjnoR7ViXU3egxxeFAustGAPaECQbgDKA4MZ538HEunpsQ3te7LKqcP8",
  "key29": "5jtHpdkNkZ4iPvDzPnqKiFX8AwkSpjWMic7Y7S33E9rFiP4cW2wy9WScf6KTMDRgpCEp2ad5inQKjzMGpKmvR4ct",
  "key30": "2E27Wm76JVyXp261yVsWeCnHYnxMGw3qeRRPfMZRkAn38iwciUudCTY9RK356FvvaSsPEKgt3KUDcsBo8TbnY5t1",
  "key31": "5vruDp2cuzAxw7Pa5RTWdTxwuou3hahD7yC3woCxyNhva2LmdaFx9MyM4gdydip1KMxkNQquyzzD3cFxohnp1os5",
  "key32": "5rEsUTcQEQmcPqi934nUHDBQ8TBLmqT3LKjmYtkgm42EcEso9rzNRMM5Ve83W1Q7DDN71ZP2GXgEWN41L3D8n68y",
  "key33": "stjH1ewvN2oKG7jaGuw827NPx6aprwvFKLPmC9dEh9QHJr8Lx618iMC1KRMywmoJSBmiXigqMovCsq8YTxi6XUq"
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
