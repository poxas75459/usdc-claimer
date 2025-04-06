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
    "4jpvCsBN3vXFG9uDp8grKsX9bxCybyGdLB3a1LfT7nAEuVqReMM4THKkFrbXPGhcVT4Kc5SKemD787entbVrZiUq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4X4dGGmPJgXcEPGhdTtQX1wZNB3ARp5nTEYJTUpE8eJCUCjte21paJorQrbyc8Ksoxw4mWYaAMmo1miT9s3dpnkL",
  "key1": "2YxLbQGDDfkCp6sMAcuBUQWN4my4hSN2LMSSxyzJUoyDYBp6DSAKf55KaELKqoo1i4ojgov5n3N5iiystYVEfJFT",
  "key2": "ToCA2tFrYoM1Cs4PuuBZhc92m2HFycjA7NDJCiU8zFsMvao5nrLX4HDyN9eY7nhGzpjuR8tP1B9QQ9BLC8N9LNm",
  "key3": "4HYRutY7qiMdmFNabJ3HgbmcVSgwUQy25ExavrBAedb97iiqWwYWgxSUK2YCuEoqnApQCN8izF8za2XbFy2yyEkU",
  "key4": "5yGAYanAeQ5xDmDRdAQeQdPNQuJpT1QoDgu6SZskXMEpsL5gZJyhZUaRQ5F4N8429QKqvQJ7Cc2JLP2qJWJ42typ",
  "key5": "2Qz3PXRtVbjzfz4ADsLESxwBSetsjrAjo6fsgVLPk1e8HzEzyuFTSLqmmkVa5B5PZZVmxSSL4RhooeJWUbfMRofD",
  "key6": "2NkTihVf3o5Cf9sobdHE46mTzuytbuNJvq6uKexSbSRaVrXcebJMb1J4XcZFYV5AtsJw2hULTykCyLSg5uK9vb9V",
  "key7": "2PWJUVK3vQzfwJWHwqhNWd9iJzVKWNak22tAMDGB9eueEQY8iRBmhg4ZKfavsEYXAEgFgGKRWQeMhZqHrTLhHGEG",
  "key8": "58kKv88FuuRVCrWJhiNy7LL6GZoSRYUo8UzZHL1ux2yJyzH73JgfSSrJRZrN6kwQ5oLkVqqpvkhFAH5bHfAuUQf5",
  "key9": "4waX2JcjTdpsn3fqBJpduHJPqjLintUdKEtwL7FYet33KnmfjVxk78dqAaEDbecH3uqfEotf7sGS2NAE5KGdx8wz",
  "key10": "5FukCcaAVEuSPh9g9iw3BRkiNjx3wMFFKEL4vVtLC4VADoSCMht9mvo7Hm9XdnyWjn82zhNSD4GYdd6jYywpvNUP",
  "key11": "DiWdqhdim78EFp4JFCKvZMXFG9PjH9sCgTaiLU9tn7yHPib9EiJsim1y9mi4eNGEsLdr9FjkYhykWDduaJVijBP",
  "key12": "nV26JSfzPyp4VoNdepTSQggZDTDLobx5PEzpuFeCySuYWUyunJor3RFMcgMrrnbAPYE4HhdXghksetHnKCziZH2",
  "key13": "5J7QKofzT4cnhp3KRb2uQGVyBXxnztFP9DPSEF1Xn3nMyjgsDGDsiCCaYfyaaGw1KPwzmwt8KRXcqGpJLujS3zZr",
  "key14": "4bFXEsR3MKVjL74ckseu9C6gTSyLCTpkcgTsseoF8xv9wmTHEjzcYB7DMK6TDTsfDDZvo1nZ2U3aHMe5Jr9egR2g",
  "key15": "2tJ8UC8aq3yReNXgrzrncSPMdMrpVbWUS8vYFnHR7M1gpDiDrg97AQtqoUqzTf1bFFWi3AQAHBzgEabC2jXVHFzX",
  "key16": "xLpk4MWdsTxVoAvKyFynxGRyNopva5HS8gHp4JLHiYbvihD6Ev4WyEB394q5S5bDRVznH7fp9GzJRibL2t2wW4D",
  "key17": "4yFdTckVjM2JFhg7jJdAVFRUbtCE87uiQJ3YDYGrZwsEpWswsccRsTY32X88A7WuSF5wad3cvmViY9hSZ4GHGWJJ",
  "key18": "3tyZCmWV5FjEWcyrGL571sUSkYVFZoVLLX1wYa9Ft3vAEFunGj1Ec67nvVXf5ZyEazrBCQx2oNGs9bWbiPfUgKxz",
  "key19": "3nwkg1ezJ2zGxfFAVK1yjFfHW3zK1epeaetN5bb2kBdcB33S2BYyLqhw74EJgC2nthTkDvTqN34dMSZP2Edcmudt",
  "key20": "48wJoL4d4Mu7GkiKsejRk5SatzXz7BEaVpGq7DZweXXJ2X1LwgsHp1nHAPwbu9AAKjLi6opRpdb7YLiDcoAVqpCt",
  "key21": "4ZJryzupSUJ5HxTxdjtgDX1JzVeW7TZqjpdf8eeHuT9eRay4kCDUMC3v317ExGMLxbENsYaVtySSBqBoAHuU8Bre",
  "key22": "2k4gjLSsxAWXm4KDKpQxptxtphSbQwKwBB5uu1Kif3uGw5We7B9b66FKykxd7NP8iQywfzPM3KUy7t1Eryf7sUo3",
  "key23": "25MDfojZgh8F1Kkg71S6ce8E9ZT17KsF34CypxEUWkHi71jf65gEVpYF15DySkdVHPeUnc8fQZxe1eNfiegNND2u",
  "key24": "4oh3ym5QkbaCbRJaqNTSxSKbX8dz7B22LoQbHiFsXMJamgCKdj3s7Z5HEUyv8JUF7vfH1omYtsvGgfG3sHo2Z4P3",
  "key25": "3PC5CcvWNFBWrDDaE94Qkttniyhnp6QPkBWKsWpA5opdBkBsDoyK9G3YhD1KRMqCYUynAvU9WfPTDqMAdfSVgqzk",
  "key26": "UesgxsetkytDTDo4cT4JfuyLvVqwmtpTzospq8sw9eVkdGnC4X9basRRhKCd4MskHnu9ai7Txhj8BZrkVxczMPq",
  "key27": "5CtBz57X6pQgQHbn1T5kEWN8GxsPirxSkALuQSaZhFgYFGF68qQPcHbBJXMUJFnFrhn8mYa5iK7Yc6S1SAnUeCUV",
  "key28": "bsj9CgrhorXjsStdrM2pvyd6N6YWbHoY4wPUwzrYQD5oCPVwunk1woH36ssexQiPGncCKRgKXNqC8ZaWcK4fc3U",
  "key29": "4bUxP4ULuVUXSVghzMSjKyuPjvPsupiuSfBBq1qxKQs5xJUQzWgumJnWoL2gwe73TZusZHyMfdmy6rc3Q62tXiAL",
  "key30": "2QjFnb2yduAdity77tZ3MexX7r52N6zGL936XYsaBZfcpCJ6mwjetmfN7XfpDUr4P4HgPnoS4724XCesZ6GDtjWe",
  "key31": "5dbmzc5uip6tGNWHC54WgfK6rosfCxBWZZkmFVPgjdJPbi6BQb4Da62UGwscMfCHvBmfX1eb19mnhop3HszGgGFh",
  "key32": "4ffEwDu1oc8XKRkeHmJZ8mArpqxKJns8uVvbvtE188NznoifWXbHeMxA3Q7iTJXvFz72V45m9sPS3PsdnLtcH3cJ",
  "key33": "4jjSPxtsVXtau6P7JFVdykP5SW21ZRjzHFRQ5WLVsijfJ2m4FsNw93f8anft9KKCs7DARmBjDEDJPf7Di7by2dP4",
  "key34": "5SG5RaWPALBD5ZfM6TAdQjebM9N8Jog7nYjhscX11kuqj6wFmzqFSqZ3NQhTsHGmSxkzXmmr5XexBmKXJ1PSE8mU",
  "key35": "3pPpGjnfnuSB3C5ekJ1vKTHNLv94iQny9kSFt1ncXFBxRBcwUYAh2Jpzzo3QNoqprQqnyCM8keFcvJzF4k33SPrc",
  "key36": "2E96d7zjRkJ5zHmhLGvUXZ46uZkDbJN4RGe1RZGZmgUgp4q4hixYTi11tmHpTUpQTa84gvZhxb8pUqFTqEpQdc6B",
  "key37": "4NGRj4npryo6CwqoPkvkaNtDBRFYgwp9r3fM9haontD71H1FgnSuQGqsdq6BquxoQBTdiKE3DqQvZLA3wb4kwzby",
  "key38": "HQYFuLARJDdxcB8ZyHPw3yu4D7wfsgB9w8xX8xVCtw3bY7USmSDiW45CT1AEYw3fFu5ZcHahsTgdxiBnzkZ9L3c",
  "key39": "3rsXDC9zebHQdBWiWYMdMWfszYXw8n93HyepqoxYBFVhmoCbSzryLyWt6CtEtzb5W6AYCNDaKsVBWMmRVLmGHjB4",
  "key40": "5Swd5MirfTbASh2mX1dvcpp8i9vJiHQkppvP3YRrmEQDT7QqHPpzQvABFGjwy2RMZztGqde5CaE7EDf6QMXNQSQ"
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
