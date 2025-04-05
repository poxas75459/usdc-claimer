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
    "2m7riyrE5Yi6JLc1Wu985xSCWFvmsyVSxCggnu4cmSkLYA7KBfpvH7XSiTxPExPZTrRJN9Qo2vbSmzmmWeEszYkS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ToJSUgFzWjGtRRcFGjHpa4tx1Fa2gUQv2pJC4VZu7a4RdTgzdp5AQBDSjHke2Qe2VJBkKrSaxbNS9hpZTDNUnyu",
  "key1": "4dWyvaxgrZvKzeRVjoatiqV2n3i7bwsafJBC8C4csyAunYc5QXKGagLEGU3Hd6Ss1S3HLsAMdEjqJSVUcrrUj9JE",
  "key2": "3dFqsLphtmnsaVhFTw99bVqfVcosvcq9CCgw4V34QPdEEf8Zt3g29ZUfQjNYH3KryuxFWGAGz1xjA8AgzwcRMUPA",
  "key3": "5t715TVJVq4rgVCUZS1CmjMGqzUDN4GuNCoK1UvjJnV9EhWe9Bg4jgV21MqvFeh7FAoov4DxkdSHT6APqeTR7V1n",
  "key4": "9AdaDvg6dFPidQz4uJyBANUrLssVHVWJnRhJz8qBKqE2FXysxfEbNimhjj4vXaxnK2hvgChZKVpv9gXYWiiMZFV",
  "key5": "GzoYFgAffFQPVzgZ8Us3Hhjbei8RwCGPfX31hoDGZCrbz9aBtF9GtHZTyLyrFNqGxbFoSGgViuk6UxnDgLbAugn",
  "key6": "4AyhvVzLBM4CFHJdKibtBhkrfsKA4hzagXBvTXSaKTiqCgaVP7PFG8BthfGuwLwTKHe5fsYWC1kHkchChu9N5hsM",
  "key7": "2PRirJGFdGf4U7DsaHRQ9aFXgG4eKoYFiGySNeJ9feVABgNCEpkDytixEgFGqF5EctYyQehysuEyCkkJoxGncmUe",
  "key8": "gTi3fLysp1JJhX8RC8ERU3gFW5nsrgFtVNktHMzge7qXJ5bPLkJuiuhZQZn3X1jDeakRPdDTnsfa4264drp5A8P",
  "key9": "bFcPs1WuHWV5YAqWU5AK5qfYLUikSGSgzryqftKaY1P5vRHknHofPcnWBPQTFCY6iDjZWPV8RrArGg53NweUynR",
  "key10": "B1D1c6526Ui5YKiFNDCTDgMUSEDfRAbr7fCf4dBY2wji9wxpioGrxokMGKFVp8JJuQqkDryTpXRWiyhXTibJDbH",
  "key11": "52EYTTUab6H5Rge1Rhf9DVUeKVvRop1kUr4GEyo8yZWkLS17SdwFqZmH1ZnZzAS1n75QotQ8gbpmprzUnWstdvzE",
  "key12": "YwaJFoy1sG2XXYxsTkcV6pfQSLi2yQBafQdwMfHcfTPQzPrAR8x4W1vEQ4wEbFvSCEDpYHP7u71wW8d1HJAXwGz",
  "key13": "4aEFqtHQtVCwqpNJPMthWg7gybTvd9RBD72u7F9g7KUUENyA6UPph873Wf6fitTXXEFpJXtwzExFfPsmv8UPAy85",
  "key14": "55DF3ApjbvDiRvqHurEzRWj2khSKg3qcKhAPpS3JAtSUjxm9HcExedyzjjS2W2nNUtdauBiCRQpEiQgwJWyFQeZS",
  "key15": "61nrBNmVAYhdPPj25SNZ3orPP3GrbnNdaB4xAqvb9jppN1d9N4CBMkqnLYmQbj63buXAYd3vWvms5Gzhq9X4srXj",
  "key16": "48TzNknjRPQCUSVA2iggrRYHTzxp3jN8b7PiC8RV893gKndN6pMFLiMTvZsViprEwvyRSZqRZKR6TFUmAZMirQrT",
  "key17": "5MS3f9niqNHsCRjWqXVaumDgMCCYsQLgm25Y7F67UGvBam6ZgrVsqFm3EibEA812WRGawkvUNCp6KjUuoUeq6PV3",
  "key18": "3rMsYJSkAqa9gdSCzjQ9uS5ZWgYfD2DKUfCJAEGEsf4qXSTWWnroHd3RKT77snG6gNrfkF6buN7jiiFJaJYbezdb",
  "key19": "29kE6R5UTuDZeLtFF1yVE4ypnRbrFTBkZCAE2VGk5YVhBuEzMWeinENRf7p5czVfrTvXM1tmQBfyxUgsMn72fjsX",
  "key20": "3TQ889UeJbHSMg59btt6GjpUP1MXZtvi8C7zXVtvh7GFuH5gpGHghKRH9VPWYbz5Xbcii1yHFY1wKqbw7LEprVKD",
  "key21": "4Xknpc2DwkuuuFGQUrEwXstpZggZ1SaEH8ZqT2BdDRkt1Y1VtT4nCLvjqwvhXER3y4pukBd4vJVxsWY1JEhKRytX",
  "key22": "k2atJcKuBhgXMoovWewAYatKbSCYBQtxEP71yrT2xzdVc5pLu9hMSAWLCCMuQo18Vc1amBrahYiuXBb2qdnaUPo",
  "key23": "3EpuUcMwaitEt98kdUnQiKxKJsEACtCvuA1VpBhX1p6hnht5v4DtytpwPex3fmNTpMGJtQX6kvwunWLAKTveLDUG",
  "key24": "3UmoWDmVKn2tNqou37dfq2fDCf5F53WiyjK6re9GTNGSfLrzRiyoEkZoy7SJRp3C7vM3YvehXkq7rch7TZXsNQyK",
  "key25": "4wQVp16CzSP5LC4hX8d6K8XEpKjqbSLKjMXGviw9rVT5wZW15YuWESsss4wpoPruGKW5Tz4RHeqdWr7ufWNuNnGs",
  "key26": "4uLELyNed5xWBN6sFfSbpQd36uyCtoHDnWTYbPoaPed3HPM1xsAWBrcVrRE9Z7FVqjNBQcEgb3eKUH3hCzr5GQXj"
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
