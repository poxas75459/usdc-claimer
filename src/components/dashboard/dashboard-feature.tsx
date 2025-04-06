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
    "2629hHinvfaWaG7eAUdv5rCBsJtNz7M3eanCFVCZK6UctuA7bDmXKYkXosoB6PCmP2EuecaSa9tAQLsaNZL63eFJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dJAcpeSjjp5rAjAYZ6twD429vKgZYkjYzzG6ctUstq7GqzHGK8QgJs7hF3SaB5MkCKS2vB8EyeiSrw2xx8PE1Dh",
  "key1": "5Kg2xcEv3AUkHukdinr6kPoBAw243woicdzt4yYBXZNG3mXJox7uisyiCirFiuwxNdPnmkL3bVdSwLyqFCk6kG1E",
  "key2": "2b9q2omiTMs6Uudb5zY4aDEhbGHJaQ9hcbuWNRtfihZPYFT5BULnWtpB26vDv4fPPZe8exZZap59nRuViim21ZQ3",
  "key3": "4w68WeVWo7hhZBTG1CZcStjeDj9BBf85R7Bx9iwgruSYQvrhVH1LBziywGNyJ3HsAxuraKoD88unwKASLKg8pNAF",
  "key4": "3C1RbGSe5W96rhLivkyMnpg6z8qtf6JNmWcbjNGkjW3JzTyVuSQTtXKtDADKbyL1EaEVcbUs1DbaASt5ipFmgUYZ",
  "key5": "4KRC6kw45CPHxv5w4FRS2ZFY5ptetSrHXw7MDZJdw1rSv6JeQL65VLnm8KfQqbWLg6RUHtATYKhvZPf3SSUnocri",
  "key6": "3Jgfr9EfymEbizC3cRWdTXJUpn2CGkg7dn2iiSkoqHzgu6uVr9aFkmF19MrVT8gwCDXRkTjicbLEVi7LhzXtsSMb",
  "key7": "5Md2JzDRdgkyzTJff7JHG3WehhfehoXMjG2m7nwA3nJD5RdkAXYWKtizsihGGzEbByycQwGLKkCRgeF7Zmmk52DQ",
  "key8": "5JfWHHbfY9GyNusmTXGZ52fiJ319LN584nrT87dgu1mHgMBWWs62hdnw5RKjdeCb18GWWFL9d8swMbssGvZGNezG",
  "key9": "46uvKXH6eUDQ2CJSuJE178cA4Db83AXucqnoJTkHi4Rz6oVUMRCkVhRwoqyXHfbeNvEaW1DLPMV1Tvg1TH3rwnKC",
  "key10": "jLTeFpPyAUVwaVLttPJV52tmsCySQnDaZbdEDzzTc65pYDDjiVeZKBeMRXqJ91XHPujw79bwaJuc2HwASsb3J4b",
  "key11": "3GNyrXMpmxJqsucnSzTcpRMYunbr8RYL1t7XifysqJDvCoNWdfzPbMzDu8p3sUHSoqMQWA7WgLzXWpnMUo7tc5PU",
  "key12": "2hCcUb4jPXxDpeDux4TbwVktxtvTMWufQWteNecZdXkHeGGfKTySZp32VFFkX5mSHxXrTCSCAN5kvLTQzEJjbUeG",
  "key13": "TvokbMoP4TNjLgP3H8cjMwzUqoo6gWiwnavDGnpMhfSoGdLjRNgkmqT7PiL2ymSVrTDVmLJAtj5SRS3Lpnf2rDm",
  "key14": "PkL2ByRzh1SocounSS41PDQNC3yoPssx5maSbq58wUwm3H5bHEnu3qVSLfD5zBfhcaq1VLr7QUd695fFnyGPdVM",
  "key15": "j5tMzjJAA4xmCmiA3QEUyDx5YGrDNgDpqiwTKXQ6ZnqY1YdVZWTTx3JUdh3SwdoW2CJFAukWx9nZpvnnyAdZiMB",
  "key16": "S2Va2tYqL9MtTKsunbQ2c3WTTnyk4A2VQhiNEhJFTgWuzBuR9SxX46qWUuC4JmGG4zhHd6Z4hCBLiesBpVW91r9",
  "key17": "5PsT721NypVQKAXYrd7bQgXcySjQkuASEMBMdMK2gXdaEMtstQb1mD25areqgyis6GKDjoVatE5o8ZVo7yERNZB8",
  "key18": "mf1fYpe2Guc2wxqPmFmWes8xgibDz8W8tR2bryNGaRhMba4NPoaJwbY3a9zDccSPiQAUcytXWQ8Bz3nQ74MiXGM",
  "key19": "4KAUDLXgN1Er72mJSkDVozqjfirvPixqBBF4LpJmLN13BCFXct7PFifacpYFs9TMi9j2sotD8WLoQJcjHsthpDEW",
  "key20": "2PajHdYFKhAaNyBR2Jb2emSY7r8RfbBj29iGPvMKiTRgBhDpwbDo8yUBnRL2CjoCZfxaky2jVUjegtZF7UyRk7pb",
  "key21": "21CpRc9b7WvxNcdcCAqruGyZzDkxYJEH36CY7Xj1eneLr1KKkZXT3hZecM9FtnuyXPtxBr7GwbmykzrbAZNGQyKq",
  "key22": "KPBSfNZUGjhrH8fVC4mgwYXAvuY9yGkojVbvvSvYUfjhVmReA1sumEjwNJkk7wjH8sqzrt3pX7GKJaQ9mcuE6fq",
  "key23": "2DzAsFCitnudbiPCP6emNKyei2hRoK9jbX45zG4VeGmfrQPY8EW9XWUZCU5t24ZT5CozoNjGxWEXJbZebniGAapp",
  "key24": "3dunZ6s21c3NGT1mUsXdJsukKJs28uo2QQuVQ7RLdCMQz4UkdUBjrMsQ5qS7Z4eE3HT4fMxYr2cLt4Y9vQSewMbC"
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
