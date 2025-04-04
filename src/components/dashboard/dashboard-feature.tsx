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
    "2wd3sNX4sLdkjLLhwtLdeyYKedBvfx4Zvsv7i6TeDg36jysm1cKJBq9DF2DaM7myPq5nVZiVZLY694BJ7XfMP1fh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wGyPjzSF21gpPwcdCmHuF6fqDvvHMm8aSHnmjPTHQUhGoysfHtU58GY7G8wHZc4y47mGVRfBBZ6SxLJwRMa9KTY",
  "key1": "2H2jz7vovUTeJkmFGScjtV786BTRBHSjQWDU3PAq6VTz9geFsuh2bt4JnfKkaQnKUpjz2mcMiGsPV5esnxLHukT3",
  "key2": "5Ggeab5gjMnhe6LviKJTKr16zuL9EGb5VY3GGVRvaZo1z88BaD2Hk815CMs4tjrpb7ji6C2DWUx26YGUcHqd43BM",
  "key3": "5G36FYc7G34D4rYkMh3X2jbkhetQv9iVfqriQZ9RbQb7ux2tzho4hhYTLc8t3QaVMCrDt8eXifcFykqAz7C5amkY",
  "key4": "3u84iT4kPNotMaYVusBSzeQPUNycjWmTjjZdNEXUVwgW9kVB4SWAznXWexZJdDiqRjAQwZs9QsMm1GaEZiQSy1q5",
  "key5": "4AkfwYz5raZCvXEZvgg15ukgwCenvX5HB2z3BNJQ5DxRwShA4dDHahHeUsCCBV7hJpBbWdV9epGYFXc5UPdGAD3j",
  "key6": "6rxaeFpUy6wd3yrzmaeaz4Ae74PMmtvXVC4ADZfVUXZJEdvJx4MhL5vqAR35DzcZVVi7j8WdjEcnZpwjumYuJ6e",
  "key7": "3sgcJMevULvYWXBXN42djZjYjTBhSRNXJeB95ug27XPhyWVGpe2cMFjsDX5e5EM3tuNP59CBdJJAmNTqvKJyxfou",
  "key8": "iAjJ9susZxKxjVzFYcgkc2VXAL1YfH8abjsjpi59R1gcjTmaKfyJMMsNBdpKQ75pjfs4D3tAwZm7jqjcfX7Zwvq",
  "key9": "2KXh2vvRUFkQy64jCfGu9TDZwyKo884qYhe6GEL8qDRwQ7QdqtR1jfEt6gWZ16mbEnhHQCsRb4ZbAnni5dyGUqB2",
  "key10": "52qLT18E6gz7p3k9uDxdr271Ht4NLW4r4kubHfdfFtSqb8kBSfrCuP8KA192WMZQ7M477La9dTjucxa5DMPUoMcD",
  "key11": "5CiSrsSAhRwfKnUAPY3gbzkZumPZ58mfvXuuvmgmXSMn9uqCE7Kqv9EaK57WJ482VZykwc3ep76S1x1WMQ3GGn1w",
  "key12": "4CoGYKUZpmb8J5u7VihmtC2JtAnwG3VJYx4GpdsztCACfsc8JX9KaseXzF9hurhTQ24wyu4xM8Rr62pEwEmACukG",
  "key13": "48EAUKkGo72XjzGxZhutSWAJ1kzfu2xAPP2exbKa9G2VDgsxpHFuBR5D4BJELA2bkTZhqKGMXGT6bvipwVXLryCi",
  "key14": "2UorVXoiSFXY5DYVCWE9NbBMo2HgWyVyZsVp4A5Wu719qvq13HTcAVdXhe3bwm9svDtVSSihVV5G4ZvbkXcqrTsE",
  "key15": "4oySK9HWVGvpAQTQ42h57DHxJvdroC6Fcsss8wU5Ru33S3JEV2Grfw35DR6MsZvCag83LrpTp6AQVUetzvrBT2bM",
  "key16": "ePWigTbRQgDG4gTSJxL8guB9pY65nFjgyaPLtRKCVdUTxkP3WHXXbDnVkHmjhuNkbZwjxMLSErgmrdNvXPm2K1e",
  "key17": "iSEwyG7DchvBYRpsm5K5MMeHAo8mpTE9KCmaF5EYWBeWvMW6azPFA73qpWb1vSuW5dL7wSvYdq79UrXEfeyF2nf",
  "key18": "2pzHY4L4Bkzxvt78w7t2AWt2g88LksWN2PDtG9jrVCawBkeXEcbV7x7Qzgv9grdbRVNckhz9uDJPoG7YJbapyJfW",
  "key19": "Uf2TzeijnKWn58qvcwMD94LSY3enGZNdQwHH6uVMRBofqJPbiYLVHFH7Z8s1iYa6UBH7Lvat86R6Ti1trzod9N3",
  "key20": "4scDL3em7jhvWvYpMdeecPLjoGa8S4YXSwnnmGq4VMD1Zv51XddTjLfAZheMcfyDNnxKKUmeruxKEtLpeuxBvwNG",
  "key21": "6qm38nQx1mmdYhrhEvGd3qHRsnAGBZi1j8ZKTW6hQPRDrg39Rzy65uCEGtNhRvwKoWGQivA5xfQsCoNxzhG88Uv",
  "key22": "J8zzNVcz9T59PsgqbVs5ZatEu72YfaqQbtQJoTbsAq3qwy1iBrDiX7rhcSuoQmZaAZGZzR2w5xGqVCSTTtyaS16",
  "key23": "3eMMkwyAayeFiwYJuguSoW3mbEaPmPWDsosjAuWRxet1ZfiqWUEzXwatVXxWvJUperPymbwSY1EY2iGsQ6Rzyhaw",
  "key24": "2SpaGMGbh9DWhPXULj5r1T9ZgPcoe8dAZ4jTxsmDayf3R2KhVTGZJxRut7ztD2Jb28stCiTG7zH6EQoaxvvBtt3r",
  "key25": "3PbnYHSX4apUsqBDAA9Zj9Qy6NYG4hPcGXvWND6yCcPbud1HZmMuK7YMLDVhU8rk2mHWeNcVTRB76rM8fWxap3st",
  "key26": "5cE4EXzUrXsTEDegNcvbDUEaheookeND84msYLYfWgQkKtsaFULF27X2oedAjMLKSE8Cb7KpTFR7HYVCdsLsAr5q",
  "key27": "2urnwHkbnAshiviCmiopU38M6xiQrCF6Q3H4mFruxnKtQp8RevWkkPpmy52bT7CXnFdo1vUB8e1tPsjTBvTgWqFr",
  "key28": "5e6gYw7mZiofHPBT3xjWUyff81uhf4pnMXw8YeYCpGEbz5kK7ZKqR8iu2fD82UHNjfPADyWgjoqWjva9T4WSXDTu",
  "key29": "2bEbkXHHu9LzwJh3eQcVWAHweVxwbfZLFjYywMfS8b33aLmjSMA8wiVDhM9zVUUBzPD8kVCDk7jEFjtPV5o4Noyv"
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
