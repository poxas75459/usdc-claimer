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
    "2SxwWEvtihuBj7dDiU7pTzjY1k53JoaLt6DsUMc6TTxc6zGTxURyH7N7kPaeAe9Uqfs8pmFjxDtzbubq78KLhc4W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Uzo3xAyT3VEXQG3tTot9rR4G2b5ZCWvGS9iSW6rZKnK16FaJ1pXpQ6w3HN2BBfbEds1HDbj12h3RmQac9Dp2P2i",
  "key1": "5bVkQq73XokHs1QZ7EzkRj8cdakB7UquBZHCEk11iLD49wR1ncjjF5zPZM8aJ8fkTkBr8Xj65omExPY2LPgGG4EK",
  "key2": "3tT5nfQoHoXZ5vvgP5ec8Wbciyvdqmw1FedHDqSrwsWzzuepEMENJkxH2r54RQUPid5Fs3ZsKkmRj6bX1QwMiVbH",
  "key3": "53w9WY92wWXMWq44gDNqZbKdT1rdJm3bJXN4DxBqX3mGBSoak5bYrYVJL9psRi2GjPAfvhGeEa3fU4t5MabRKJeW",
  "key4": "3dK5BAUx3VrTKf26orSWbAepGYHwQvXhRMWSADS9EJPq2HtZhkuRB1LoaXipffnPwSozwciqB6XjPiUJ4WZah1XA",
  "key5": "NZrNZrGWVTxcmTykVdiT2MFasQyWdiRj8HVGrxYcA83rMXey2Pzt2Dx7Ggjep9NCYcFaHEXTriDy4SaY7dk5xqB",
  "key6": "Z3hW9J5YADfvtSmKhGrgQrb2k3oqSYc9kGDAsDCqfwfy13FmvonwLz4VbPtSqdQcjkf2mrhYV428n4qyd1QNND5",
  "key7": "5N5m6C8uLjXfFsPK5NKgs13JSwz6FoEmmsAdAeVZMNEiieNBCadxNqNWmD9WW5LTsTTn9Wy6C6ULP8gKuMmgAoPq",
  "key8": "2hEiXvoVPx3kKLCTXdyoUpqQmr14LKp3G4Ccra34ijZCWT6d1Uf26rU4HkCHr1MRexu2q95mqm4pU5W2hms2wTwy",
  "key9": "4VSEnA3uY7GBxdscuZXp17fXdQHoqTT44fEdF765DSQFxMuAT4aWNVv6pCXLrEGEMYLPdNubPx5oVxF9k1Ck4voh",
  "key10": "64oXHktCQ42ddvVDgF5XKEh55P3hU7UAZGQGkBHRqzpdaan6DueJiNTtV9ySoWhjngs7ea8CJrgMNgztc3kzzS9t",
  "key11": "2iYKoqGoEjPmFQ8XgBhcZbDixYp2aysYMJqVgxqtq2SrQAo1A1gN5Q4QfSYQFwvXnMBfwJjKqHHFEWDV1zEJU9kg",
  "key12": "2J8NJd4jbVYid3TzS7QsZtKSmq348Cr1o4esshwLjxCEr537MmVfgrTuqz8mQKaR47ESESVeAWajh7KzHEaY1Vga",
  "key13": "2BvYF5efK4QKpmcv21Y1ETQnpNHuLNVieQtZy7SWfF7aej1j42EdMnQHDqppSSTqKYw9vGgqiPRpCjrp9DeXPMGg",
  "key14": "2mhpFoq5w4YTW8DpVvQ6TCkGtrpzADcccAwpeWS9rwMo45NtfQhPk3HJEJCEoKCGMWwx83TV43ewWDdVG19dXhdD",
  "key15": "33FST1VFP3ofbGdmRbjktJFx73hskacXsbRDbe3VREUkagq2Z2kojuvV6ZBnpGbsx4gc47hzE9nXEBcun8YFTVNT",
  "key16": "kFDtBPpNTvwEz7rNVxJoE2G3gRzV721dxL3iHSDmH8tDmntWiQvPvgdqXFszemUVJBRy588KJ7Jq7h5KgDHXSso",
  "key17": "4ii4hmvQEm5oPVTsfqLpQeMzTW4WUvVXTSaGVTdfCoSsYx3y3DEnitwnFTPfkbWMuLLWeKjfAy2QnbU2Q2fhSp2n",
  "key18": "8a2yxKs2gqhW319e1xQkGnbtDwCZLPE66ek8ytkoii4BEPDQ6CxF3wmHTryqn3Hh6EByHoqangFPsqtJuTHrhaC",
  "key19": "2ZVaXCxzJz7jnyLUgbrrBgFhTA2ocDpUQ8MhFNANb2GinEH7vfqBAiu9VzwN7ZGRr15V3ArsADK3QUvnAGDzV8ih",
  "key20": "4v5NGkyAoeEzzqGgsrhsevsuQhSZJGkvjgNpvFaymuHQaFWWBZTNx22eCp7WkoKahVz1sZ5gJPvqPoNZRVnewq6A",
  "key21": "5Rg6w9htkbdJLC4WDKtPrLVTgNsKFUArSJQCTatf9wxCHZYsM2d7oTBFPywLpRV8L5saEtcaXWPrt1AKEM8MScw3",
  "key22": "2KSGHijwjQV3dUczBNw4SYuedWV4PA2PADXE1BULgkxMtqZTMcZD67AfDpTy7SDAoUrNwBPUZC4J9sBMn7PrGZtt",
  "key23": "4kYoBYnKpLP12dU4raAMiSuaod3kPVTzhdyvKAmD4QXqi4r1nxMHsqg3GNKARBS8e7styaJ9umCBDy3vR4kvZdRv",
  "key24": "mWytwij8B4yn298rcXFJh9ZNYez2kCmu1eb9kpkpLCU22GpKJFimmpCb2CpusBBfiXtcFUSKCPLigXJCeQ55WZt"
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
