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
    "5SgjGQA9zoQzNUnutvkeLycVeN1U42ckX73nz66mZfF9M5U7jzhDpPBnPsbT5HrLW8KZ2JM9RqrQzgMrm2U5d6S3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qJwmTuNSQBcXTtZb57tSEbjm3CAbE19eUv8hrX5iP9HnYjZgwjPv2uMr8Ehz8ebuZgVBwKJLrASVRdhq85Ft6Tv",
  "key1": "5CbjwqT2hyFUSQuVrRbrmz4nBazRJwJNQX2T9UyU1r47ZrecNjZ2K414Q6p1x8M2hFdN6NK458UBTKtAfB4a4nx1",
  "key2": "39Uac74MBM6fpmiuqL9Wsd1YqjrYSJKYpk2ze7F46bijhU2gwGBSzuXmf2LgneaX8o9BqvWJ3XoEqHRj5kProrPr",
  "key3": "2jaDk852DkVCGJTgQGKCjRpbZ6p71fSamm51kaWmtypRXzQx1S37Lisuts6UPdhQYCcfni2SANWLq4HybY21Qmxt",
  "key4": "4d3YP6yqhhYvMG1CCRQqPsnvGTzFu5HrH7KiunT2RaRgUmVuat2ktyL1tLijpuFxNNhZWFBtu1MYregDvJnXG3mY",
  "key5": "4R87ougTkSXyFcKMxcSxfHWBQdKuvciuQjRQ2jwGvtCJ46TKU5XKM4SeQA88Qp1BtYT5j7xdK82ngofZD3B9sP16",
  "key6": "21b43nuBpdQ2PmxpF5bEJ8v57TXc4RGbyMPP4hC6pUEhjYKzG2ejkefaeHJtpfsaG4Q2nBgPU4XjcfxFR4qmmjFe",
  "key7": "PmZNr6VZ2jjE9uYL5w9dJWq5zneFgoEg2MAyjz3ahhKn8c1TgZQBDdtPtz1ZWqMPwgW1TLa4zq7raYztMHPYoVR",
  "key8": "ihgsXNaSbqqzn7ARsxNKvsW8UmBdKiVJAVuJQmyR4HHhR3KNch8R4GhEa6QgHAR3GeHoExFTTubWv6yK1HBR1Yk",
  "key9": "4oLB1YqWEM6m8KSB86UKKo75HNdppVY79SvEpHGPtB4ZjUKQ8WXJ4qVgLaXj6P1WySfZukogpM8NqVjx4LP9o6qN",
  "key10": "29UJqCitKbGayADosQsuAejxc46MmW96u6eHqVpQFKCg2HFDmiSyGTSuhnqREeZjwkQyk2fmMs3VdkiXriNbr5BV",
  "key11": "2zK9TSq5mD8LLAWLSWAj4Ph4buzkbTFtZ4EVSvYtPqbgZZt46uddbbs77CeBLmgrTS3K6SKjsVd1ioCTauB2sdno",
  "key12": "4xu3XdT3CvDt9YLGKFcRu3tNwpvk1o2nqFZRMyLEptyxyzhamn6LkDYB5RZsGaPW9S2LTFZ6X9XEHEStwHH54SKN",
  "key13": "4gxqtisUeUFbo4tbgem5pKnScB7MAhMg4JkvzvZuaeKaNpCtncr7eFgvnLhPStQ8nAeqTRPKGJ7ubcmr5e2crAnS",
  "key14": "7XPe5brc8CUtNGHfYFQowZ6tkx1YTExf76chwoyva1b6NbW6EspP5c6aHdVpfUFH3EuoGLdaA9tpxot1m1NUFw1",
  "key15": "4aWijtDW4SFr3oJ4oXzh9quC9xskmTQ3caQ5ALZcV72zDGgh8dZgYpTnwA2HeMcy2baYX1kDkTT1DfG8gAwkSgG7",
  "key16": "2Usn6bdCF9Y7VFrxxuSm8C2VX7VfP9kfkXr5avdHJCKHUH4ph7FugHN83782VVVmqzby8QH6XXCPMdCtxNRrue9A",
  "key17": "4SYn2RZQupr3gpzKdHQzc7Ps48tCNELxJdkX7dL1RAUb3eZ2c1VkxrSW7HyXA5WjSdkcRpEL9d8fhWoKMdh9swwm",
  "key18": "4fm13dftB4A6vmqM3rtgcLkLF2CWrwi7saTy3KEWT7aAa9uUWQKowxQtxBfq8Ehed1iYv6XgL2MdSPs4SGtYnDnY",
  "key19": "5bSgUbWdmmpKpMiZ2LN8vns4UQ2PFAw8x1k7T3GrteoWWcZQZXUtqorYuxvBJ8SpwHaw9Sf9CaqB7jJ4Fdq2cjLG",
  "key20": "3vRBUbSYhaV3greSe3RRjDH1yD6sXpHGQ3eZPL63a2ToHoD7NEzmj3qodooUhE6ustXQRynFecg8Db3jqLYBruCv",
  "key21": "seWVA7xqXhQEBo9PAZfM1C3AysYy9WJBRVJpxthKbJB2G9oHpoF68qZbDj8rLuVbCRNq73GadWj4tJXqCRnGhJL",
  "key22": "42ABUweohH1Zqg4TZcjafKKQKoJW6uj2u6113FHRReSXthJZkXDHQD9Rs5cFSySTKg3nbtJzDogGw3czow826RdA",
  "key23": "4duT2wX9a7Z4v2czSX6Knb4hirQua4ZYTNmWsiXgqq2F4MmorbFr5e7MbmZ5uL43iv7S2WJnNpYu8pvNJbfTySKx",
  "key24": "5CZgx5QvcdBi3rVH3dTeEbyHwyTeM1LdYG9Xf2m4PefrDc4nAVZNL5buws1te89XNW54ghwnqWcFxAU56tp7SLhL",
  "key25": "2Yjf4vREkvbBQDcpa2CuafooxSjUQJywDTnjauw8efxoxGFXdaqs32KCAQ3cv8GG32MNYVucGqPtUa8fq9JbgHf1",
  "key26": "66nkMznJTZ4BYRsJEoy9YEH5ueW28czvAMC4U6jzDDdVHHyEom2rCb7TKQaub8PXzTew1MDX3qnKsbQVyBBZtKNq",
  "key27": "5p6mveBEqgxbKPEtWVdpYZ2mj9tMUWHn47PRnRE3iouHq3GmUCfZuYaUe2DgojkZoJtFuvKcjhZRjsNFMStjgKyY"
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
