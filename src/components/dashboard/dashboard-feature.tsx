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
    "2hX9PhB2n7frX37wT6owZuE7z4z3tYPbkBkGe3UHqeKWiQAPcYVvi5VNrZRdc3GvEohouHAXoJ54LKH4oKQAGw3S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BF5ibGQvwJCo5foJhy6Qjs3yd53Kh4ohUUunxFRc6uc1ZHXFpqRjpoVxw6V3HVsEHjeCRTxxjbuQEcwNGAUTnCa",
  "key1": "F3gLsEw8uzaPbMjcL7y9PanPv327V4RaHqdv5udnreDREYaSv5SJB4BFPZ8NatbwRNcWGGjYForxraXPPc3yKn9",
  "key2": "9zukfyHuCncuoDporv7DMN4Gxdgsg11Vawq7hwgxTTmPyxQoBVXhJu9tfejWBv8CeFyxERPfGV6QBkNWuksJ4SF",
  "key3": "5LBsZNyyN7ULAckHtmNBhZs6pFo3MZq7oz79dW426a3tyBrj66uBrhXJe7enwSEGYZi7Uwd2PaPFmb4KKqyCgpCX",
  "key4": "4GBj4dmmfVDDqsYaT55QgxXPk4nqkMbyzwXK5U4mjH4pa1JxEbhYnzAeeiRNtv4a9a48LKxcNDHnXhEQa7s5qcwv",
  "key5": "31hY9RVksqwr96RiPCGdUHYeLq3BMs5B8c2c4EgvCb9U5uk3iQMTrRTZ6LSGWc35orcZqXpsxQPyWe4Px7FgPjB3",
  "key6": "4yEXzibNAzqudJdauU8sepCDhJFPwaniZMSCp3K6mKLBV62mzMjkC27LyWYwisQPkpdu9ZnQDZDtUPdRKVA99qpD",
  "key7": "5WtH1qiPqzKj7UjvCyxjzyqDGhJaWykW9Swe8PB8Q9RyQKHuRoNHk42QHy258WizEDtSAnsZESG9QfGP5FJuqpDX",
  "key8": "wSfZFRwbm4bW5quKojoEp1CwZQvY6fHL7YgyfbuwRC4rwyELwCRmMmpFLvKsCdqA2BinCWX1r1wxSAKVHmrum3v",
  "key9": "XNQ4k5yFqP7vDuC1gTsQR8oStjUiLJ8ubTR8sRd7QQD9MBUEX7oHPs77BhzXvMtRo9mywAdpp3kNacKXguF7VHJ",
  "key10": "56nNCjqXPtYsJbxFuiBfAtdwnrXcU8dZnDfrBiF4b445RD9ud3boKj1U2eoSqE2n67gaNJuib7zBwkrw4CyccKN3",
  "key11": "2BBQfERFwYdnmzR2pfp4QLM7LFQmXGHXKCzks7ePMUxN1ypT8cUWa32KARqb7wx6ekgZ3UvjFDvBfR3yHA758ATS",
  "key12": "3DtPEYyPnd2YAjDPDcTXNLa6EFP8tXR7DDUydkMtcSdNddfA4Uorf2xeyFZxsL5Egc9cn8HPuafVoBfrp1GT5Kp9",
  "key13": "YGbt86pyy2tVasszfPoKVXErdjAGEJfR91UXmtDwYxWMniaPVVLjsd9gP22R1LFehkBDhQa2uBaz4PzPhmTo81w",
  "key14": "4Uh3FyAinhAfWnYuVCK8uVuqzUtgDWE64ZX7api23gAgrbjZXGJQm3WnFJDyKTfssw1ivUhkxt9ZSBnbYQPwVSPg",
  "key15": "5AM6Np265WuY5CoSCFUeTBpMijJPSDaX8qYhGTNEfwfcujufVbLPzKRZnTPdxoUBMQDFdPGD2qCWHVmBS1awdcdN",
  "key16": "M9unfNFbLCV83wXmxgXmRDb77CpaHpGAQEVC7MVWQ6Egypbf6bmtdeYXLHPYQYWhy8Jpgju6bJeDi1564vYH1Vk",
  "key17": "j2RQTb1AsJbszejs3zHjpgZXxHrALRjvyboZjcp4WmSuTX1eVzQopXxoRMppo49HueUsmnX7uZFki5w289DadYd",
  "key18": "4XXQEJsGP2pk3xfDicRE3e8m6KWqrB9VcbLB2D2ig5NfD9R8V1Uvm3AZv6pndJp31RpbGFBNC46M8wuUJVyDkPHN",
  "key19": "48ccFEcQ9ALrWhPzu3xJgo71veMwfpqbqBAaooDhUN3Hgj8kTS6FGn1RfhpDwesVaaTLvddTGjvpmBuUvA8vpjNf",
  "key20": "3HsJxYV5vRjyUp4UiTydHiDtmSpRrQaETEuiYEm2nRVGdRyShroDRjWrEqhUdj34NP7BMs2dchnP85DrtZEbkYPc",
  "key21": "3Ta69T3Qd9cWYEsV93zHSaALsNkbUUXN9ZxyyBW3WZBHPbfTu3kwyb4mMbnZm1KCgriXVjAiisjYuTQXPHfABAhQ",
  "key22": "5K8Ke7c7gEEaCaMxXYsZiKfKVRRM4MiQkWWmMCXqDkv3PaCA14XqVt6QVkV5mLTYEzP6JyWHFYiFrHiydxN3V3Qc",
  "key23": "4y3ahRJNRGijhxZZMsCYXf3AKjmE1TXtQrqbzDTfeqe4fnDrKh1EQHAbHSCSfwa3bmKPTYU61UodCMbym1hXuiiN",
  "key24": "27UwUm6V7n94Ribsx1krmkiWHeXNvnuoDowHtx5gQSjFUnsGRtJNgGx9FrL4a16ckrybDUNTbYnF5bVb9ibQSGC4",
  "key25": "4bvu2rfpTmNqfZ75DWefxtapWJJbFvew8HF3fpqppfiaSprRx96XRnmYJU3gCacryBwct26rb8TTDag8vXCKSnUQ",
  "key26": "o4dLn6Lj962Zdtav3G6VUp4NEMr1uWfAz48vh96K4AgetyyKruHgG25fGC7dTCcvExcDSZ6v2An4tBfXLhEwgtt",
  "key27": "3Ce4aYbrDKgWCqtStd7PTZKhYwGPitrxnk6i53Uf6gDJpu1A8dMRMEMEGnW2Bw4SDymipX54Q95gLJzAZd6eSkfZ",
  "key28": "kg1fauU8jPCgnG7Cn5FUB2HF2gQVTfPYpRQvERJvFqBCwKV1TR3Mg2cW6qy35Pp96PRy9XbdVPmgQZWAgv5Kc5x",
  "key29": "5A4Dis6oPLRthzADyve3tW38RCNw4oT1Ck5ERHMtonjA5FQcDYt4h8WrGRzka6G3vdTesbUhArZNEwkP9QJFxsBG",
  "key30": "2o8QVexEZFenkS4SenMsMb8GNUFwKsiZE8RBPfmZpN5D2VxDii4rv2N7hFtS7WRejtoJWVAcFvsLtKbHFK8N9rdQ",
  "key31": "Drz7cX559gWyXvuv1Er3iks1eC5zhBS9rKom11BmKybVe8avmyh5ijdF8n7QeytPn3b6JFnyjzZ89ScBJDU6bYt",
  "key32": "3oM8uXhj8kKUHDCpVNAY89gXj4jKhH3t3GUCt2dG62xDVBesa1gWWPPd2mpr7kjf78QNxa1qzqodyd63pHErv6b9",
  "key33": "2JwwCaMX6UZCkBr4HL94EWXYmyziPYcCEg2RSrGAtZzsyAhAJ9Yy7pMxBdN4VArCdMsivjhVV99XwLU9zRi89sXi"
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
