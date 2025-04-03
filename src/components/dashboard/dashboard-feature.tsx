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
    "46yNN5vawGWT1PsNmk9816zH1MfeoaAo7XxBoznJh4Dq4Cidvo5T1MkCzZc3mb6B1AKhH1Uy6HCo6RTG31M1D2yq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rkTwDyP79pptVNytw1tvGDAzTrRifkoiL2tFFH8ur52YkBA4wLzc9Z1tso2QbPndJ4kFN7od4Avx8nUvxYTDKbU",
  "key1": "qHtXEMHFv5XASDawnR7HvWX9FAe6eVRvijTBKPQagQqF4svAeVXk8BvpgZ7zMQobsHw9kXqW1VV6NPEoLv3rPse",
  "key2": "5WxkMTUTNZUSqbJUSAMFC89HjFUU9jq6iVYQBmXddaHnXWcEqgochJxQsFj5kB99veTsXCGaJ2kZqcG18jxCsSB",
  "key3": "2ZVaKMDr4F2tBaLhnJ1C2qSP8q3BF99Mun1wamUoPWw76C34V4ZQZcQEcRnP44UWoSUhmsa4T5hKxhbe9AMLzaFU",
  "key4": "4qRmukapwsx8xEnGKeDPWYqu37ivDgQKEZckik2MgqEbPAFCxkv67myBLw3P6iXXLYtM1i3sskkZXBCDGYaZypPY",
  "key5": "4adeMyVyopnckwyjjHuKLkzrHs2gb8n4m3vD2tuXFHA5hHNCB7F9mjjLi5CYEMikGV5uBmEgwAe73r8Xyr9do55Z",
  "key6": "4c9kS6eQwz8YsZDVLFnwBNSTapQg1S6VELDKfWpXJ3grxQTAiATZ4F38p1sDVcngrSJiiSTrRFP46cKSVyZyq6n5",
  "key7": "4xovgrfYpojzb62B6QVURnibdEMoq31tG8Lh6ccp7hdAxPazxo7VDJECVrvrTBXu1Pz65hxPtGSDh5AkRCYqU65t",
  "key8": "2Fon3SzRLiPv88M7n7fPNisFVVC6JXbHe8nFsnjE2hMQ9NvTcAFJE1F5Uijgp4ioXzJiQCjkZkYCnnV5tA8hpwmk",
  "key9": "TLY8V1puxcsko6pZNoauajou49euFoGz22SXywqRQDSfPhkogCcHfnDkJyuG93YcNrCQ3fEAzCJ2dq2FtStcTf3",
  "key10": "2125voiSxynJhMs57rNsRpBbEnTfy5Vayh8o9ApFmuPMZ5N1vzjyBGpGi5wM7EXbemkSCZbywu3SfzVNm9voYKCn",
  "key11": "3AWeB6S1q6CkN72r3V4oJPQaKciueycbRtwQfPkhpzECNFrnG8sF7XNxUecFyqviueF98FTUYHFPBKnZ4CnjSYTx",
  "key12": "3srjBwQdFaNzqgEkmPJA8XSKggzvzETmRug95QjBmfo2omUwtTi8t3nrrnrrCN9ChknPaerD4CzWZzMAWYc3hepL",
  "key13": "4DMAaMYVSEdQCXQpT8uJHvXnMCRSkg4fqKkDK4cvhEApDgEacGDzwpay3RiNShTYR7tzabEk2UKrAnV4pY9gmYxM",
  "key14": "Mv11jVLM6M1cvQKEHiW3qKA1fYziq1uVLrcddSncfTPtV934YHFGgkQedFyH7xxHtXPvrFQE1bm3zsF4iwjUGHi",
  "key15": "3AsVsMLzFd1DK1Vu7SdNsEdmb2ecGVYkmtzwAkHd84mhn3KyJsufuG1QEoxfvgVpnerHVjLoZZJwyorcWeDVcaWS",
  "key16": "5rZhq6p4DMz6Fk6WaEQoZCddAVNaqhH6uJNFDzwAVKMncHNSMzRo1SpgzeD5SYAgpZQcE3DJt4HYECHX2FVBroH8",
  "key17": "53JfEJ2yhP7yS5kJDmMPywEVAeqGVGfUtu9mRYQXWjqmyqzKTFZubcL7rKQnzL33egMfZxBkFUDPvhBEsW2DL3zF",
  "key18": "3bJVKggdphaJNN1iinF7aCHrAvuvM2cE6fyYtsjjMJTQGHY5ghYs4metTej8vsqfBvQRSLc7QTWBAheMEd2SWbZd",
  "key19": "59NP1a4bz1CUoUV7pTewFZDQu3LBpfQ49cke3rJYFaDNGXnjqwfBoJTQ5CRqyAtsNL6vGMGtEL2LVe48Pnp9atdi",
  "key20": "63kacf1fPPwGSHNJcngW2CfmBpjTt5Tw6SgdHvxcbLwjiUVQCbwAw5EUXr1kao5zTWjdRExjBrTb9eHVPvykZSHs",
  "key21": "4ur2ZNr4YopukxUTM7WGKL9uMSZbweaUXwUX1pWBQpKJLD6fzk7fVimcaqTBxMpy8nrr8NDmjcdLboX7cSPZ51m2",
  "key22": "5ghKcqyBLcDgEjaq34rkwqLWYtLVdBQp237hLAakxCE1ZcvBwidvMSDH23CLJHRLaQhaSmPBeFtwgawPAr4po471",
  "key23": "nGKC2WGEBF98JEtz7MaQzuTAhEU3vDGEfVMg8SB9Ub4aFhCtudLEyBqM1VZKBPnGULbJ7hdw7wnJ22AW6oBnTSi",
  "key24": "sJ17n8Ht6pfa1dGpuKtKbggX8NjBtiN6xPPE8XPECpHmY9hjRn3j8fQ6d28jCJXjsAEUCrUorVsGjFb5RbwbNEn",
  "key25": "2353PjjCyiBaXGzQR5qY3GYoS6m2GPg4sa1NEWPknjXGEq5ozyEvxuGx1ni58o7Zr9XcUM4aNYpyhtjLKBbHtoN4",
  "key26": "2gscD6nmZ7wDGTJjThsqZE21hPB2oyS5HT6o2w7pc1DEA3B7NqqsSs9XY3opxR7xWQneg4dz1sb4Yzmb96RiV2pX",
  "key27": "4hNoQqZdymYtLNTAfyqCRZRui5AAEBNVagCdXhFTZdP7GRHVziyNHRMoPrN3F1RnZtyCc3EkDFqEghtScPj1vGyr",
  "key28": "43kwfRq85PBw7QyrVEiEiXpkwKMgsycYiYiKBM51z43PMqFmae3dzAYQXrjqXh7wikZmiX6Xqcf51N7zyyfD14mh",
  "key29": "2j2SshPXsZVfauexzRPAgSErswNYRQLekcByHaDnBTKbYN3SL3et3F1bad1jWVVoc8GxFuZPuycKNN1fSsPizdYP",
  "key30": "4Lo6seVS97Bb7srSNPdqf5KNVU3QPoKcYatiSU6UJkJrqjcYxksjySw9m19bdN7jpVsZxAZetJ5DabdtCpTdfP6L",
  "key31": "422wziPuJ3AerVRcswPqMpTLrwXD6XHjKwSpPk7eQsu7NhKDnEuqS6Kgm82ebhdvj2AGAFqYvhnbQi24mG6n7F2n",
  "key32": "Ck7i1Kpxc2k5FwWfsLsCBqQ5WopgxoT9xEsrC4VYCxgZFbKFwXU5n8eQgCCPwview4jfmKAtrgSsuV9NDJxVTv6",
  "key33": "WSAKkSHTdHyDgcN1x75gg16oymvZSQLATqsDUmTAoEzLGFPcoHFvYHtkx6UvuxA2pHDWRUVdXo3M7SGSwaVAafo",
  "key34": "4x1bJ4SaGrEMuCuhZsZnFM5dE7G4T6xKEkMtzdFL4GyjgfAUkQPkaWXctTYQMpyStPs72sKM5iBsfWhBcypkVMJx",
  "key35": "64ugAoLMum78Ne9MtEzygMpJQvp6xpRXQvSQNDpzJnwB2xiRQfit6iijhqbLjNtdY1h3zgkdVXMgEwN9UxqBKEvA",
  "key36": "2j4CC2NViaoVmAK2gEg6AR2PdxWTNZZXVue6JvSs8JgNJyc9i9aCNG6fBkv5DyrSNvpmXgbcN45wYPHAMJkVegTf"
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
