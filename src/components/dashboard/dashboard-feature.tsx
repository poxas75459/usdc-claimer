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
    "3N9sHAHL1PiR6YphYtFnc8KU8WpMbPCLJNmhTHswJavzPULS46rVT9HXooM7tEVPBGxzizsNhoUwYbTyJfMojjDs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3a7psUxDMbHg7Xv3NXMoLSjTev66XxWbJVevPpceCfK6ZXjydxJNMKQ3AqiCNsmtCsgSz4rJqDoAEZNMx1dpvfoe",
  "key1": "57aUncBGMMegTRtcAS4PwSRmKhuuQu9gBiA9f7di2wDUnDAL18hBng7YavUrQyGViTzqQs33Z838keakihCCzGu2",
  "key2": "39Z7UpyFvt8BUf1KphSzhXzD2P6PipweNsvfagz52JoUTCYEFWt3PmHCpKj81zzsuH9ewg2ub1PkqaEBvAfsMGSf",
  "key3": "3qpiv9St9qU8PQvbECCsyXUKFThnRZxMLKJfjhkBcFbDLx2E1dVeCChztxoDWpHEKAU74Vs2WY3ATvwthnuGdMnR",
  "key4": "38VFLhACG4VXpSBoGWqeSF9b9AaduGPFAgNvVCTaRLNyFSZJtZ24xoVzwbRCGCCTaC8So8GxPAKSS1ucN8Dd9uHu",
  "key5": "3soLSeqm8XNfm2AU5VhRn2vimMMHWxDUFkpXgQHg8LzxKgaWCCwjEac6pGwbcvT8Xz5mYUaPa5DoCwMpnG6xSz6r",
  "key6": "2oigckRET3UfuEJRsVV6xeQDZQNKeAJ9qTdXRatVotAt65WsSjDMB49uR7pKFDUsCAhqP7oPStzGQG5zA4AEq6F3",
  "key7": "5Y1uJ6kDhHfSmjwi3yNEg2dvzWbKVew4ER6GCsb3EHSPD3KCcmcHPUuf1thhxURKWFmuuDS1ENSUcq4DA11HX8nr",
  "key8": "rirT9Qht47sqa5zV7xsRkGrYJpHLfd7RMNzz8eSgo7HoKmr7bgAH5FWAKFQLGt9pZShWH8Vrxyn9Y2tsT29gTEu",
  "key9": "5ppSHZryj7RdVdFzM9NedyeJURRTtsAThsNrGdSfQoHmkrsLEQ54kpp4dKxrq8vTaikbywuE4ca5ibtCmy7KL92f",
  "key10": "4CqBzjnxiwMt56qurVC8Xakhj8pMjQ4xJ5oZNEySt8BdF2adnxt9T2XU5fuFeXgfR8jxp7D9FwamzX8KZzPJEd2M",
  "key11": "5U2anNw2bqyoTtwE2eu6bhV66PznZ2wGSobHsj5b33qNfg2RM1eDdqo5dRyRefvxrBpvMdNmkMbQBpi6noQm5Jc1",
  "key12": "2m8PYQ5Gk9W9u1GDGP7wHxdaB9XRrg5kkUJWuQFaDTrpyD7rv5y5jb3g3vvxwcjW4QkJikCwL4fn4pEG8QXAA7HX",
  "key13": "52XgXGHxKM59epGGxNFbNpmx5uqHnw9tiwLDHpdBiamBpfToq7pMWnvmYw7SgxjQAfs9FjwtnF9YjXeVXXTPnQHp",
  "key14": "5TiTi8ZP1itP8GbJsQbZLk6tG8FtNQTcgdwtLxBhopdRdvMDDaWRkh4sNXUfHgQZgqNgEM9dBrizA6QAtK1t6BJz",
  "key15": "3LiASPd3Zksu47xMRwzaE8HV58FqXadrGVHoXRT6gWhfCFZUpdCohPsn7m6Q69Eb5SEA525UFvQrLurk6jctP2d4",
  "key16": "8fnc4ZtfNoSWNjdWXZnPe5u8uxXvbW2vxSXN99W99Cv1FwYWfzCSTbPXxYpRByS25jv8oo2gR9XZGypKFodsPfG",
  "key17": "4SAL7ysi4aF6CWaqoaAf4oRDYfF1aFvrhe2KcqwrE9d7znvqrT2xT1A6irWjdeX9zPL8xTYeCSmAXXrh9yU1TFvP",
  "key18": "3WQt1hi6Ns2TB93Lssvb3cghnemdP6KpobGDuLpdysadHZtepmqaXA97cznQeeHecKyAog4bAqBLAfmEb18B8VW4",
  "key19": "3SZtwauMuQp38eYWNW5iaqT3bDJbdHNkwR4VN844Ad4N8ZUKpK5RohWG7HuqMKXerxwvAMFqnmZX33aowSSnyQKu",
  "key20": "4ihL82ie1MztGcQMV5ejgLb1oHR3KQZLdRmt4k2cnNQNkf3fcG48GP3PW86P1RD78yvCB5DSMeEikKyde7EXjxZp",
  "key21": "3cwy9tmGNU64Tjj7pMhpu5nB83MZ3Tx7rhnWgU1YtmfuvVPkBGZtLTSpFGBh539WkxrJmHZQ3AG9Jr225vnUri7",
  "key22": "4f9Moue5hTyyTpt8Kk1jEC6g2cG2MfdKwgS7Nvj1JsYSRXK72ErMRZmsn3mW3U17RiAmQNXgstrigpeSAwZd4ryQ",
  "key23": "5YBoEmrYMRCUoHSAsUBTLn4MpUKw22uNw5yhYD1Erioa6B1axib1uCBMSL5sByusxX5jYBKEZUCeVyAXVUsFDBe6",
  "key24": "2QTs5tn3mMzmZZjwY5UR432g9xscioAV9Srz4Qgc4iHvsxbCxKNGTZs79pYazc4BngJwkj4fP74631RXRpvtUn1N",
  "key25": "GVLHoozMpJ9jPhWsR9gLypZGcqLQcUm9rfZwyYBEoSBtgV7W6KD16e9wE5RrqPGtACtgGg1zp4UueR6shJWu8CV",
  "key26": "3udjsN6Gvax9mtyPzKGYudx5yxVQvp7BsCmuADLStuV267cX6dsxVVhK1KqULvWpzrVeYxSqRRwujqVARrDfNhz6",
  "key27": "4aA1Hw8WPw4FXodQsv4mZ461uynojhFmfAJ3LmHoQLESckSMtbHAeZZ8i1dCVwfZMWhHnn73CRrB8t7KxCfCcsjz",
  "key28": "2SrKYEHnr6V9MojHsiGkRxJuQZdodaY71q3unaKPrBcZSxfhAmdTCFKPMQFxJUMQK2bH6MM694d5dRRw1rPMPUUd",
  "key29": "zDpjLHXR1K8pQpT46BFdGCrZu87xQjJZWJ7JjTvcC2u2igX28tdwpnuYwqmESSs4TUWRb1pJAWvHtv9kNypP1Aa",
  "key30": "eoXSXgaqbvVWhJmePRE2kJbDnsS7sNdveb6E9DGgMrfV3vGts6fkapobLGkFChCgktg9sys3Hvg2txYbuM4qXuW",
  "key31": "36LtHNMYPabGB61khDg13tRc7W1FnddMxh31pUDW5tt7XtLkTi1P9ymwZF6TEFizmjnEn66SHDBPcobrqNEWnDiv"
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
