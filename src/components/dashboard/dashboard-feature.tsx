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
    "4Zdm1dzUEJyW1Ti6UYTA5Nu1o2s1sPruR2tzjcUQvSA7MQDqBVF3vQqFm3ifd2REQHRrzWgbXF8fhADkx25SUDKN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HcCRn3bPrbQdMX5gaiCgK7hCDY1yPkYi9YhrpXpACcgrWWPzvySz4T6mU5xCnHmwMAXEUNZP3Cr3w4XD5aXGiMp",
  "key1": "2ENJvb8E3meB4QJ6kLGwch9UbJtfyGarHf3bQLxqRQhshuSRUFGA8CQk583QDCGr9zDwSrdfsqx7WptJK7k6LPc4",
  "key2": "28Mw2FPssrMx5ZakLenJUq3zM1Nno3ayLsn3eWRLGYtKBmdK6Jwr9AWmeYbeDFqNJz7CVGNgntYQfrpce1X13SbL",
  "key3": "uJzTpnuHQDraSZN1vsxba3FKFjC9idicYsGkK2g9h2G92K7Lr1gj88qAcbz3317q6y4sVWLbcBRf6g636jZzoU1",
  "key4": "3Dod5sHuXDPeVheHjH5Pmsq5NLGq6doGbcWNvAjyL1YsHX3ThuJN2kXuQjqQMCxNnC8MnAPNB6GLjXfw1kB5NbCP",
  "key5": "38M1i6jnJUhmD9EWJe8tLZ2wVSy7aEF1Q3XkooGATKVTbqko2eDiRAefLP5BDQDAjBKTq887Fr7fjKnxwJBcVTeg",
  "key6": "4MxJSgxyUYdfp36ya9JTeRofrqzM2LukZhexFHBrqBXs3UJyPKH11Kzt1vUovJGWGQt7PGBzkbM6sz2V2vs6kehq",
  "key7": "2JKEafxsrY3D9E3UfAvx1gqZfphcXkxG3hKHy3mwMMopjSey1cCzTLb7E9RefA4eyQHwmhSDkorZdAQW3VU4fzxf",
  "key8": "hj1RBw1D2RT7zowGYfuirEzMmB7jPm5KBjd2qPEMCP6M16GyjfEBprPtG3Su6eXGaJuaCf3PyK6b3zAD3jJpbv4",
  "key9": "2vk8gNwjKwAWfovZr3Tp4Ts89KjihHLh5nE2c8jqPzWKxYtj2DL5jf1CMJueM6nJM7FaZ89bgVDCZp3Jc1Cra7Td",
  "key10": "65AY7AZGYj7qJVbYLnqLYihq1RX8By9UsysvniZfDLSbm7WGL2nFyiQGRvuWxJvvuE4wmENfxq9nBPUJ7VcF6o79",
  "key11": "iKoBM1Jq6DrJm2EJftnx55iX69uncSYq9cimXie3xXcFRGtRpHEckjXcnbWpFWJXfJVShg6koLjqh4MSjkbmkSy",
  "key12": "5rDaiMCqPEFU79tNBoejTa6pJxiWRS73ZfnymkP5kwLj92S19sgj3PEHS2AJMwPzDG3rWDZLRLcp7V5BjZg3fGuv",
  "key13": "5XVwBbn9P8kkZKeocGgyyJD1AKYQyPPeXXru87WiXrrtCw28uP5knv56cwWhSh1X4ByZkaRu9KeedbU7hLL9xrqh",
  "key14": "2cWepChW2kuQoDVy99StNTgQmv1Q1QN5ZkJ1qYCq2ye7abvfdZ1iSpwgi8ZN9TVw852BUjNwx5eQXvivNcL3Q3ju",
  "key15": "3yoGReLtKcf2mWRBZQiNMDcDJyP6YY8ZD3h6UGA5wNzPAQPGtv7nNQMVrEgzNnhstvVWkH4UdsWyNtuiuQAEJap",
  "key16": "As6dHymgmEwnJG7eeVwBFh6DM3Ef2f5Vsj7iAEuMRrQN9VP2NniReiafWztzMSkjBPNtVJqwRXuHrD7CfKvY8Yn",
  "key17": "4g64h9YqmuzMd8DGVFDaoT7V47jVzDmoseLiASpeo19623K6ohX1Cczb7cahZUjSek9hD2YgdzF4QxphUomkVyUR",
  "key18": "24TDEoQMzEppRrpwYxo6aNR77nY4MeZiRpYrtoBLzpsAtupvYjEA826eQW8SYV5gnBftfKFrfFjcyrt9tD87jyfB",
  "key19": "3FwCiEz8WPSXh2mBn9G7RGkbQq1rpKeuPbBMtYVjr4Z8vSTVPW7BxQ8m8tLcyozUdswAUu5CS84gTAQe5GJx643m",
  "key20": "2jYSqbeWXBWP991oV4Bc21rMm8zxNTVHWjHz8xnTZTjtKStK6SFnR62XQbFRQfbcvdJwFgAu982Dignx9dxfp97S",
  "key21": "29YVBY8oFRUU4V5mvFALdECs9kjB8h6i9FwAKrgMhkBiMBy7iLncBwrcAeTVfxn7zSseXLkUcaP7RWDGiWhS52NH",
  "key22": "3C2D9oiWAXoEfxZwrtyvfg9g3RuP6KSn9JcAX3odgq2rWSMPXKSN7qrE1PVmyotHfxSyXDDPm6gvW3qcREJjmkXN",
  "key23": "3pKwruXVbgHTgWRuRNLt5JmFHftDinudw4PpCYVGRrhELDRHq94in8jgm4UA3mYAtq8MNFXAvZZ2LUdiBqTiCC7e",
  "key24": "56jDdPJdBEJ2FpRiK6cSaZp5wCdZj8L8G68WcfGa63HRoUvWWhXJemEvZTBokUSJRvQ6pt7mQA9JhSCqdDBKLWwR",
  "key25": "4YtVvdnUrEdAAgLa1fZ8JGgebprWYp2ALwGgn6MHPtnM4dXPoj2r4HCmHxLmZqGYbiW6zRbVNS1jB48qDSU6JD1i",
  "key26": "3P7Qx6aZkWDztuBmWWYLU6SP2TcPNGodLMnUQ9AyTPwdHNhR4qew7VPZegjspcjs5HfpMVoHGmvS15BwUYh5dEno",
  "key27": "2PkqXZngSBExMqM3uUy2ovKHrVB6aH7C3idSq5Srbb3vK5c4JKBT98jz39HZQpE7UEaYS88p2Ar1c67up2CZ5Ttm",
  "key28": "2tEJod24cEJMuttBTvbm6B35uQoePrWDykA5gbAp9DqpDCLSRaZNYEJgYshgdtJoyNQ1mFrmUWJ9YLroSeYZpCgL",
  "key29": "YtgK2pucmDp6A27PTR14PSMoH3cnHxK4Sh6RXBM6MWPUp9vKo2P4uL9EdoQrduURsfizkWs3J96Z1j4zRszdkLw",
  "key30": "5wULkj4Mtrtb6wjEDoS512RLmZUwWdujRTs8qMM1Wg26mQECrumZ6N2ND8aYD9FXnem37c9Uord8JxuXKBbXT2kx"
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
