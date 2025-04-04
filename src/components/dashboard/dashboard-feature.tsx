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
    "5gHChaWeA4UbgM9WGRw18fpgFb3tL98ogSkdckCuBwdvFD7KXvLv5Kx3bxTMudp4382ytQ4xkmAcTfga1Deg7eLF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2p6NL4r3X2a3DySB4EJ5xR9qkuruAP1D2Nz8Mk766XaTzczmoPPjBwdAvPyqzYzP5bFbh1c7cmRA4kM8ZSYRVsMN",
  "key1": "3kMDXYnhekDEN6YzkVGT6hJyAYYgEPCwSKFbzKD8ExCRvpGsUVso7qCxd5tCcdbUZWg4NrCUbUNDD8FHXifxsind",
  "key2": "2U9qGsbbjxLyiUMfP661UuoxJXTNSfV5ijQ1JrJcDyuazDEDGpvR5jFRf3c4wyeyaxZq4BEoucYYauEiTxhKXkes",
  "key3": "o3R7yxeXa8E5bBpGvw1XeV6TAW8PhPLUrvom5jrfyfziaP1Tjo222LnxQouzJ3b4Mv5aZhG6gb8wP4BMtyJBwMG",
  "key4": "xJDrxywrZkDswAM6AayFcKUYwgFQLoESCqXwW9Mp9FV5U6kGH7pivY6tmGet1Kd9R8jKb2p61EB9bF36DukWrDr",
  "key5": "h24R7aiw1mauktdWdnKhgRK7whXJp3ZtARC3PvF9QJFWXiGuVBqQZcM5itemnTN1dZoCwNnU1inFrkEfgYe7Zvk",
  "key6": "2eFyR4NNrhCQDDKP6s2hqHmGN1VstHiZeUUBk6y4MfquCPhCgKRXoEZpa9VdYGuyiw3kPGct3qWXMj3xxse9NQia",
  "key7": "2Gr45m5Uu6t8t7itBcHwNThCUksage1vUVkksWqBM6wW2hTnU4zo3JseCmPaxBqfLF4NBPyyJyqrcR3h3GoCZMnX",
  "key8": "2ESibMkMTihAsRu2Cjvay6nRqU3s3qUUHzhCUAMRxw9SxtwqbvfBG7aT6t9ftndFqRBa1kFi3sFMturj5NP1Ewkp",
  "key9": "4fnnJKzF6DNBymKCBHU61VrkmRSTNdveckRy3FJmjeNyu213pGHw5zjun9SMyWpXZykbm1xE2KnQx7bkXr9CHQTB",
  "key10": "cezrxuk4qiiasCRhSXd39dkBXsNoim4MfvXpFH6oXXYkDE8wM35vHd7G3ETpezebaCwT5NpwrMffNx8SqDNMdsC",
  "key11": "3yP2ts2eef1Q4f8SuZAU7ra2nREGWjsSq3UtQCDKDPH15RTm3wsyervd4MAX66zEptkBmbihZUHaogJRJhaCtrYH",
  "key12": "2PwGjEUnZbWRWCWF5dPv9XiVkEgMQxgZbdvFtrJ1THhwSsbXexRj5YKMCpVb5etwLEib9MGN4UAU91PS2b6KeKC1",
  "key13": "2o1MCPAEkrs1Fy5T6Wjdzn4poD4WTzju4dHwVG9w9jcTqZmMiL1XCCWdp8JXrp51qtfNhRDHLcX8i1SGAgMAq9zh",
  "key14": "2VCeTjVnEXm1xmcbuJfFGRA6WaTJxrVPoPyn2jApejvvzL8kqerVJsMX9Pc1CzLktPqS5M2sarEGoGTYsSW6nUju",
  "key15": "66eM6erfHaCXWXu4j47aUZeqcEtLFtvXtJAHUXHaKaLQUWFGYHYwvpnxMxYXD3iXWNmiaMGKc75HW7Tgi28sE2ES",
  "key16": "WDgHRV7FozUuZwuq7baaeCLHDRgBxEeLBwkDhn7K2n1kQFovHQbDuu4na8Vhz6cTG5GjKKPojgWhejcyv5N8EQD",
  "key17": "GrtGwmSABh2bWgk7LgmGBkz1CS8E8Qhp9ckb44ELnbrVSHZenoT1LFAscJZeifFS9a7dJzQSdDNRGJZv8e5BQ2E",
  "key18": "64osxKkyeqp6vEb67qiN2eZCbU9fg56eFHm247iNCbRbG1aix8hsYqwerMpmouREEnjdbWqvNLAExQVpMuofZYPG",
  "key19": "22LReuTVdvLgfCT8axGnYciSNxBCPfviQUeuqH2sTbE7MZYLaSdCS7EBLTWSbprcuiVrEaKeyvTi5N74NW41YXET",
  "key20": "3eZugm6RS75AKDbU3rikkLdMCNiwpRPJYE7DrwtGzAetNVgZHysRPtFGBuLgCRJNPaAB2V4JbzwVjBUdxjuhpAGX",
  "key21": "24CgGJnSbJdMCz8djoVXZxM3J2iA9bVL5s7inmenkfBJ8BLWN3b5wp5j6mdu9w4bYB8JfhYwPjEhoHyCFrGZ4Qm2",
  "key22": "5ctve5rYRf44NyhPGqWwyACQuBXir53b24h9p5e6fuzCNnvufpQUCJzz2n6KVGghdRs5fwderkL9eXQD6YvZbWUt",
  "key23": "2jPTGQT7ATHdG8V9PUrQC45BEZ3TyRE9CZV9D5n5ddkHXoogfb7MiPMv3J6b4vEiokG59RosVx18NSE1NmGi3n7k",
  "key24": "2GHCFf4cr3Vtc7mvyMwX67UH4JFj7y5gwZy27CDyYAfmdCy5DwKrTnb3v1gNqWQy1ysgSk6uNmDmKGPxxS8Bm3iN",
  "key25": "2u87TDbdT7yD6cgjzmU9vKHsiEqLwHWUq7BskbFS2idVWndUiazgNFkTJM7QfGuRVfHu9SCGgd5uL1tz3RcEsda9",
  "key26": "4FqSXj948a4Qecgqn9gaQxCjVzrvxaTiz4ZohyVKpdw9Ni7kpkgEXpBzK2dnFsAqcDPPdexiDzkBsCNbpe2qUYHc",
  "key27": "Ax4xRiCeaiJbQC6x7NikxDojUPmGNsFondrGTJpzXZ4cGqzsn28h8MjfopVBM3eiHrq9VYJ5nD7eZYgQ7JHzbjq",
  "key28": "23REAtubXUXYBSLVVaERsaWJA72AS2Qaoz19KppMwbvMHjcdT1ketV7doow7s1yahbusQLrHxioDTzYMoygrgUZa",
  "key29": "2F3oQR8b5ioTMzWPNvZ9zpXqkpCHwNm3sxTWTXWdKwzaXvACwdE7HtnUfHyHDJSDnivN2p76VfVH672yQr1g2Eu5"
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
