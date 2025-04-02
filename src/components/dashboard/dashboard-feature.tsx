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
    "3Nuguu6zdpsquq6KnL4qMwP58cMLxWiyXfZ4RGzfJzZ1yXeJTupjFUx6eV88H8i6tbTfiaiBYVCpXizCjtrdzPjs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AKjTRjZyHMatb9D2fquV4Y2EJWZDHCEWUGT1vHpbdaA6r3ZQKXm7oLwHm6kRXHdrrgoWJHMqQuFFGS4eqvovJst",
  "key1": "3cr5K9kq8im6JtEbJo2jzCAxmT81qpbFkQ8nA9AituHEqF7Y4unDT6Es7E1EtYAEaqBD9vgfeVQ8Cs3zbb1UY9dE",
  "key2": "2hoHVU3db8jhrWrqZzgWtb8kf6usZfbuqfiEcfoP2yGUyRNdmDoT65pF19oF8HWNzHqC3VG3fMXnFX2ui72SWXpj",
  "key3": "3xVV4RqKhHHFLrB8hFsqsBVKw8P2HfVpJEsxxaP3sj9HcRv6vP5oTrenmNJVgAxhRoiiF5xoKSFaHEUfzbVmJjHs",
  "key4": "48MbFPesnTKvZpYTjSWqhxewui7mFmGhLGmEycpoyKR5v5yfifv7hddu6Gyv3VkU9paqYrY7Q4gQP6SZhMGZjW7e",
  "key5": "4SDqMhh1kh1x9bvVbAtoB1yem12fDPZ92DCdwC14749ebsNULvaDpisyqiT6Qf2gvtbAZyr4EEatpBqHQU9MNfi6",
  "key6": "yXuwxRB5dedqq2AQtp5snsaLhuNCLvpzX9hXhv5tTGbHFB6oVje4rAbLD8XoRiCUuiPMcMkskxTiVovNA71GFc1",
  "key7": "sEcFfVZaCLSV5SywaANJ3q6DpLc5jkTHAXHRjxXAnbVTUFvi6S1AgggjN22yi1oFRS77xd28r1PaNA9KCUa99tk",
  "key8": "4CXCaq3MQqsXnEd2Wody1ATpNmfwA8mvjbCMXzpjMUKWpAJBkfyEFd3EeDZ9bFz6va96zpGgRz2RZFgm9AqgyJnm",
  "key9": "5Gb8hmjGsWcQXd5iFw2XSCJiC7TJXTtJyQNfZowmr6uh3CRUMN9mqS9Rd7ceJT4zdW4rMDe3jhcxSVBMzDo4FUyx",
  "key10": "3iYnNyJDezoFUDR3ZUDC1AtM16JjHfuLdxGAY7aFZqQNpJzLi5iNp73E3AYp9wKEirxHHZzJ8gVGM3M5P4emSrn6",
  "key11": "2Xy26JxPiTDQYjgvFgpZKRA8E3Qd5S5kG9zXqc5dBuhd5bJbJpsRFyJW43ERmxoqhWgTfa8sKCeGhuX9rdE4f6Br",
  "key12": "2eztz4X7mwbhaA9zwoM5KoPao99bmZYeMJVmE1eYZN4EhQWq1tDGQYVwBqZUdzDgxqnfGFuWJvEQRHi3huLDDyDw",
  "key13": "9GKdpXsLdfCkGyY66FW9a59tfrybuyt1CV9VfoFa7HrZJbj4Tx5e6ZW7ze3yzwcPQgoxCugqm9MLnSZeyCLHxhQ",
  "key14": "4kDRHpsQMP4qYxCzuHdbRiNPmRwTjsVPbQZTbxy2Diw3PdxrT44K1TbVAAT3QFUiyJUuKHEfnKHtsCzvvy1i5BXp",
  "key15": "3eVdomhXJ9B4MoAeHPbyFp7HVKLiERHUiUAGhvXV62osj7dN9P72PsKXU6GUxEn74x28y7rchg2B1f1tBQhttbah",
  "key16": "4UunKCNSVxx24vcaJoqFvBje2QTdVTu5vhWVSBsMLfrZkn4CkF5t9pyYDCnWXgkBBR2CzfFKJQKVpoc4YY3YSytM",
  "key17": "2PHmbLbHso5L8p6KB5EMHi8cGEvtgQL49eCSK9cRJvjKWtj9da3gBg7TFWCkvRG7ZnyZkJkTpcEWKaCegNp8nnft",
  "key18": "ygVZvanYo7iE55Hx4dah5gvwFm8ro1vmQ2jaLA4XWAPiszk9GRMWFk1x2MsgAh4Yw3iCKVBzpRGTA9ZVdjA593h",
  "key19": "3FU9fbeRgTEJPA9fVeCi9Q7UpzouGuanJhy8HBQN7np6FdXFpSoqbwhFsyDYbW5tDZECTVsciVaV78Zq1bHTFBg8",
  "key20": "wdEJrL94Vd7dzNWsmtJVqZo6xbuqBtji7ZCZGSumTjeJ3WLcQUF9QCUvak6ygsP7ZMSXLKMknXRXRvQ96jmzrnc",
  "key21": "2EaEKe2uwS2Hqifg2kQtaEbwU3BKZFTnv393cdV19rPs5M5f9Zz6y4pog2vTa1be4PJMaq2D2uJvuxPHVAwKv9ZP",
  "key22": "52BRTFyRm1uCQuoDQVPu1C1DHkAZWAmZE6F6WeTKCCEgNeeGQViFB1wUhMQoCPUFtKocm4C5qfWX5RmSYEBkjL33",
  "key23": "39RWveToKUK46RybcA88xWWGs6tRakV7pEGoyDqctWEpX5dX64o8r5ywHtMHrY6ZNQz3cQJbUABTsEcoJ32soEv3",
  "key24": "4Y44vAhkq86fnMnhXDggLeV9biNpZBfUmhtQM1thqqsGfc3w9qFV61GS7w3jHuLJNkxNApTHXg2W6neiRBeztJ5G",
  "key25": "wrTJjtDBWb3QxRqMGA2YvSNCFTB5CyKK2DSTwVSNrxNSLDBg3ZLjhkG4WhBLnCzCuns1zbWbshW4Gn3Ftj5frPP",
  "key26": "cMhkRVoSctomhqo7h2UXNDZjVTGa9nxKcTERscRF3NjqW6BnJzfWL3chgpfZKVw7NL4TZeA651Mq9uiMDAsUbr4",
  "key27": "2Xct2URbLX7qvTbCRCoB2jaebvTmF9SYExBkRvCM12cuM65cNSVSfp65FLXkRA3e2cgh84tpi8yr3jp7iB3HAb5J",
  "key28": "5dT76QtGWppwv2Jizpj4xuAa7BPJJEWFrRH7fU7TMkqHaiJ8VUpX3FUERsmyMvwxWGnJe7sjpfsRXsWHvCkspWhE",
  "key29": "5nccFVme1QnJomyobaTP9C2YM3ixDbTiux8AZQeX1WMeo1uE3jNtryQ9CsKViuHDVfvvgwnL6A23JmuvfsrFDgSE",
  "key30": "5ddoVYzx2RbvaUZrkK7Lm1CdP8qu3TyoqosZmXKzvmwjoh3Rb8ttnJkQHSPWiREyoAq23tDf1eEV3giYz9U2zoGF",
  "key31": "66BXWczeHBxRytNZxsNY6mpwbKukmAHxmz9aemcAmxMxGcusHoZAwrwwt3E9dmiEsKiV2jnzhFJmzkCt2imSG8h",
  "key32": "5rF2rYx78ERrfSN4vpzqRUAW67m4eaG34iSHACCzMCiJ9WfBWkKzkidgXkf7CEceqYzDfzvrK4bfHfcRA9c3rNR8",
  "key33": "251RRDpM1A5KUgWyEK5ZU9krjvoFnkJxotAXAmH2Ffuo8xqcU6nNq3UcdKhQX4i8LQAUP3BjWjwdt7Lszuy5FMwc",
  "key34": "4PerWyNMB2oYsYMUBKxi7NKNNAjxGejVsVK13oLTk2wvg6oyUDnppYsRaU9DA58Kr1MbdSDNyL5zoXzbqXToRy7i",
  "key35": "2Q5JwL7qqkkeoqwP3s1k3ct9TQ3BSzaCJmEyRbGMrp1i5EnATU89j9rrMLsk6CFXk5KU5bfPAhmGKnQVnsE6ALGh"
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
