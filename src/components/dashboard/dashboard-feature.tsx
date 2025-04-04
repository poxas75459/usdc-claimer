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
    "5tKYzwWvkY7tF8KbYVKi5DWJbfNqRJBhFTxPjCdFWyTFMLP1XppvwB6Q41W2a6Hw9zEeCavi3etLMPv368ACbRo3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4s9sR5on8Rmq4SuY5kPaHQ6mmUZZFyveQnLxwaSbiid2xG83wKNfHE6sWwgFY1CusBjnYJfcdmepZVG64cF3CRbh",
  "key1": "5ctKf2wZhq4xLgSRjT7qWXSTu4y1vvnnrq5EADFSmwwJKEcxibkyjPuRo2XFuqfP6ueNzdo429SN9JFBJD5d4cii",
  "key2": "5idXB4th36G5K9bx4fALFtMrtEXzcgonsihb7aC3ZqKiS6A7xJhskThdcj362TGV3YYrY4ZctRkX1mrMqP1Y6nuq",
  "key3": "3sbEf179jQMWDrHGtrVazSmebiv1JdrWuh7q5g9SomKVofbcwL9ihcdgs7L3iGNHGyXf387SJi9qcSzMhmfT8PfB",
  "key4": "4ZuFkeuoybbBSverYjrBzpWtkTRqutzyeKuUurnZmevPkJkcVgTBMPjestV8Xd9mLexbrStYBCgPGD6QwyWyAC57",
  "key5": "3jAHZsYpvt7FTCgggeMcwW4ibGUSbXYFfLGgk4rrKA8JSnqnMtGZYJkC2t8381nFhd6fZk1M7BCywNvWXn28Cv6F",
  "key6": "4PtzkZaMHdNp2NtRFiSHSadiLUY3wwbNaSDLbGtogMoCRBX7Q1tUuFjfSjmk58gv8yCA4ezBeo77uZymkoUfRtXQ",
  "key7": "3WG2F1KRa3yvCcpbK3wYcCcwgMVSQYJStf84fR8GvaNdpWaRbbTGc26G3WisQ7uDF85LR6EfKkqM6Z85KdhwdJ1z",
  "key8": "4gDyCvqGz98eaD93f2Y9tt7GktYhykpxA8PhRFEfq34Ptcw4yF3y5Qn4zwjZ72SFt7oe4mVSLBghBh7xebZGMafU",
  "key9": "43X6snHkzjsnqeS9bUfoVjgYFkBewLXTH79tXhqmHSNAaTMM7C3WYhhMAQrbRdihUHjggYb4tWU3EVsfGWyr94DX",
  "key10": "2tKXHhMAfbS6hrpanJSx8jDvcgVnsvKhnT5tkjNTHmJUB2TBzQvvJ78PvTdjD9RjBMZTfqCZkQ2wwynkxtvd5Kc1",
  "key11": "3nbJbCADLeRTuiQ41pv9M6JaPhTkmbTtFsZ9j54KNi6aH7mAjNqGnuFppNC1mKpfPFFfGPMqyQKR5fSDL3QvNveb",
  "key12": "iBjSKaqCAKPFQAiNQQiBAFbNuB6L69wZSMPGRQ6DqPMFZnSodwxBpN6G4FRiow9JDNDBiKPRvUtUqrotMFGnqVh",
  "key13": "3RUYUwNu5eUSH7TBWK43DrynX38e8sKMs1KfRjV3xmYctPzD2qotJGvAcgez5uj8AdGvVr1ebuGkrGabTkfcWnKM",
  "key14": "637RLakqs3pmv6TDphyX76fqq1V6fFZQvfAppeRv1xggRaUUr8ZjWyDwcWc3G7SsD1vjrBrpVZF2ZWJsbjBKLPN",
  "key15": "3gK1dPy7478XZ9BWRDhfx2Dvxnr859DhQsfbe8MdYdDACWArXYQmSfCUPMv7jeDoKcdUkscJ3hguGfvq1nPJzW9Z",
  "key16": "3zJMKrcotFUXoQ64H5rxdjnzDsELe4JXZ8W5TAjrn4UBiqhjiJDfstD9b9Ww7oxtD2CFd1rz1VZtMe5haR2bhtcb",
  "key17": "5JorzobRMougFke6V1ZneQ44GHoCjtMhLrofGMiti8fVguEvAERXX79MhjvgN2Qdoi2sjuPhFU7AiHknmwJufaUQ",
  "key18": "669Q2ozxS8AXRxMMPoh88C5NjVmGJMDr53J691JRWzmuFCkjjDghuVbkxbDhBrZN3sdP3KVAGnhfJ51Jn23zfca6",
  "key19": "DXSQcA3SJgcohykVVZWA25kc4BgHwp7CNedaYBwWBEjbmm21MsA5Ud7CZguPKwzn2PTry9Tnwip3vZhBZzP24rh",
  "key20": "63WmZb2RQHtjFuFRudzc9sPXFW5yX1C3hP8a7wVoie7yTatFKWnN6ZZii1GDW7N2C6iCPJs851BPGDRnn7LLG62g",
  "key21": "4vJnAd5VKqBmfGbHgf8N9A2PM78R1aiTMBqc7KBzXANwLGGnb4ywjc93JN5QcnxpsmH2RPBH1kPbdKrLHL8izYaY",
  "key22": "31sCrvxnqSBfLTKEVPnfGwzkrw141wRpef2aVJhQeDjCpPJ8LxFLc4qfzmzEH2vzBgs8bg9GmvHHRUDBjjPmyYXh",
  "key23": "4JQiBZwV6ZaeLBqio6xTmUP6Ngeaj1fvv8T2HLD6JapeZdLs65L18HGr7FKDxfxmbUKisuhZyqQTgTq5pNC8GjfH",
  "key24": "4astwfiT3sEJ4PJ8SWS6xD68AL2exuvwjqVn3Hdp4QST1tmyShc8gs6DcCex9vQ85XZpJcXvxoJy6NJY5eTCdkfa",
  "key25": "3BJgBMBPPqkw9e4A3uGnibyPMmYQ66YWGbho8t38jmfZjBPWVRxQgfgSUF6GCztU7FCVARRq4A4zwBqiEK55hD3A",
  "key26": "5j1JzxbEnDvEhpCZcXdJEyyhLykg2pTkP3hgdw2LztpdtAP5B8pQgQwGt8UvpNa4hhnDbbJr89JrV53oGkerzR5n",
  "key27": "3pf4JfRv5Fn8enFsDazguJNaNuWwU9L8A7Pixt7QwcHXKjUrB3d2kDRQqrzaY9GhMTwcQFZUJzKKftdrdBVjCeaG",
  "key28": "3JyyQhiB4dcZdKCpymdXvo42vpfqRJGDERzhdBQjL6ZPLzrB6Nnge3sNfb8GuSgmpVZGYR22SGKrfgeroi3yo7WP",
  "key29": "AeJLY5P8RsfFnqKtjVqyY5iewEs5s3Rr9fU5YHDbk2apRsM1frJQDgeMavAvKNmTaV6AbvQNB3XpuP2H5DfUXRW",
  "key30": "2a9YxNxPYBcBNrd7Vm12cxcRP5sFZ7KwDNPzpcqqmJySE9rdPJ8rLVLHCje7sTW7oiePECCXKEqEYBA1Fe33xsR8",
  "key31": "2czsHitAorLSTS9cSeWtckVPAzKqcUYatpn8r8AkEX5e9EVa7evEkUS23pdLZP7KW8h26rPjhDSUtPq4ChdK9a19"
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
