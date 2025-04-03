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
    "nsZtwm6kgwog3dUtseo4YNFL7ebQ9sAk9yjpktEyYaq4AurfVjGkDZ7tawZyRhg6ViV2KyucriZnarKstMUPusR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49m6zniDtkrAWDFcDsPHVjto8YoSVGAhQmutQZSMBnVwQYzJ5MLrD3uvn6G7JABiQCtR5CEJaSi7MbZyYP8Uy24P",
  "key1": "2AdPFu75QaVToSX43qsu6qfu8h3psWxYktd1QwY3sh9GXX9kXmEtQKribn6r8VpxFHzPPJUZCq31htFZtyYySdTX",
  "key2": "28kekiAZnf68p7sFxdkngVoUr4hs8hS4F5d9BQHTcV4u3xax39mwVBjC3NJZigxUc43wZzva7yNrbMV4uGoPBFAq",
  "key3": "5wwGFi7aDqoqqHAGxKRRsMBGD4mLPsUZuMsS7KiBf3egZm7ad73Ke8sVjUyJzrbCfnBZUWFZQKJtzqhTynzFvZfm",
  "key4": "pyVBVDxoJKk38jkYuLfdgWAp7AduStcPzZ4rQ7jPmBGDaP9aDb2futq4E1xQC6khxeE8AvATNJVT5btmw1JpXyE",
  "key5": "3iB3y8niFok74y11dvPK7m6duoQrTAmmNRfhv6QbKQnfAwi62sbVSTy14oxa1gYKZ1bvv4kAziCZaZNy7s6qpYAJ",
  "key6": "3rJK75jCsqmbasHP4nXfNjx3dnwPjrKznYrgopqoEhL3wZuYShFQvVd47W1xtxBoYR2vQcTfPvvva2dUoDHAGiqX",
  "key7": "5MDHoYMU1tvmNEqi5dmZMeZqv1BqSYGDrQHMRNb4UxSUdze6qWJPAVaUDy3HatXerxv3FHiyrX5W1RedHEMn5Qjq",
  "key8": "4qy3ZAwvCoNooXfW6JpPys9AGjXmJtDDiUjKLwdQcoFNTYsBEdf3JB5mGThvymT9zdLYuYAhz3khpREkL9zN9VuD",
  "key9": "2xRSuNhhL9NorgtmZLm8JFyrqPpoPPCyux5ZAhkhDKWCpBxkrHbMz8YcUj7Y8bhGNoKWHja36pMHtBoec4se5n8i",
  "key10": "4UuP7jbw8rzzdxYYT67iPXKmvdWXTRDZUzKfeLTf5MG77GFkDaM1ajpKtsU6N5bHeE2FWmaGDC1gKJXMFK4D8Ak1",
  "key11": "5yaUAA57YeiXm9c2v7fwKWeShttgETi5PuhmU6N9yR8SC8JScPn9SEoqbSeFbJQd9VPXkXZPUUPASeCRPBpD9HwA",
  "key12": "jUtSQowbysLpLvRLrPmGEP57faMNTAF31xr3FkyaK74WfGAa2Cnu6ThTeEciAmXq2LAUCwrsYQ4sPWDYWS1bTka",
  "key13": "2PuiuB5h3ZpkrpPwWqaGN6cLbUp1CcYksh6ALTUao9hfJSQRPEBzPAoVX5nwj84HLqZvBhc6P5AriwYE8Gy2cyzz",
  "key14": "3q6tKLt89YgDPgicsR5yDK3Tx5V1LC7XjWV2B39UjfoLEbwte6n7dv5xuKjQjC1CwDaW4uXZyG5CxcmJa6GatMa2",
  "key15": "4q21sS6s7PYdL3qG5rw2bdyQiUUPG1BpqbyGVg6mfYK6qftXQUJYBqVkyri2htfT1pgGRfZpfNsPoxRNW14cGHWP",
  "key16": "2FBscZqSXUsXRDeJeYwHjfuniAufMUqCcJugYRao7kuvHG82Q7a9biiE2ejLZf9N1vZbNmE9a8NE8EpC2Y2Jn1ho",
  "key17": "25YiWw6TvbaCABs8yhX3U3o7Y1o1EaHvu1FXoiLTgbHPkgb4SR34EiqBavPjw4Fdg8qQxxTbMTrGSUurGLB3ZXmd",
  "key18": "2Lb2Kfx36b7sqgaobt97GMd4YeRnpY7smAo8uZpjXygjkfpvuEYMW3LEseXvyfxyxLr6U6k46ArKAgvDKXTUd9QQ",
  "key19": "ZiwnoAhdHj3zinUn9aHMvJPgHGzX47MjPiBFEPdWvd4qFmRvTV2cfTTRGW88ry3Aru9Et4hYk9fMb6Kth6Yh7Zt",
  "key20": "2fjFLUGBzcL6pV8JjLh51gMVKieWWyFWaneN6833AEwrqtMwNqReW5mokRUuXtwwrbNAnwVBQFstbwBEGx8uza4c",
  "key21": "4ndDLFLCnmCAmAtyiEJpbVg7prR61yjeFLwV4o59GrWpy2s1mm2P3FrXxQ9agmPrFRA47MvU4NC9ceTVEt3LFKFM",
  "key22": "5TmeEJxmDthdem4h5dho2mxgfsEFrQqNkEW1nCuXwu2KB1WAb9FLN5RsWgdBjjT6LwkW23T7rZ6yaAFRG6J3ETJg",
  "key23": "617uzxmuQYEwtbPkhTKWYFexWqfe5SH7DE6R6YC3pWXNmdU1cQLShUhZzAeFXvRRTKRg8vBc16Hygy94EDVKtHkT",
  "key24": "5Dp84yTbdTkGvTmcMG74VJqoKpTAc3J94C2wWk5wLH8FtmTx3Y9fGwraJsNWnejBFbAFnRSzV2HfWsibAEezfxdb",
  "key25": "5ANZddWRP46Mt1cfYwiw6iFyMVkm1vLrXA6hE5DnjhsCkvrewm1QRz3ev3jttkoStFyJg31a1AnNAtTbp6NG3vin",
  "key26": "buRFrergnFvbgXJXu62q99fyqV9D6kSACDbfnTpkMZKChTxaQoUoe2ty9hxgW7invEfvsqEZvRFXGEG992cpxfT",
  "key27": "vs4WKV3vM85XDx1618NoAbmLqRHoTpusw4KbXtqYEbvyFYSF1qQcYGpgwiJ7A55gr8dnf4PkfQruuPVp9USi46M",
  "key28": "4qBgqeGTxSkt7s84fKssVkL1YPV1w5zBfU717wiiP5QG9H4Fofhm3evDra6RDxZ9KcPZ1uTiHe99WYXb4NzJzx85",
  "key29": "3mLHrpnR6KE9KRqcRwo4ddrJzsRpAvij74vxGTezATb9Cdm4RG1US7aKe1uPu7x3TT8Dw3GgQXfqBVudWtjGYGjD",
  "key30": "yR8eiPfrceeRXYQhy9M7otPiD6LfftdjHexTEM9RstwbkrGdNGjLor7tGdqmuXbHkZZAN5HK6jttAtynJAUYutR",
  "key31": "tr99nKjZHDvdkQpqKk95BvuXGqFvPuzDJ7W2iwfM2RTf1BHhGBJpV7L4hYKzsMsnGVMoz4MaHETHjoBUs9Tu13Y",
  "key32": "5Zmje2z9Hei8G3zrky9KvM2iwUMFUmBw6HqHm4XgJSeRDynHss9nfWYtCt9GdbPcH4dt4nASEXdJKoj8nQ4Wp2tP",
  "key33": "4efKsExErsPvq27pshrUJknxT7DAJcFCpDTkWtpbUi7Kqh4kVJWt79ZjfhrgvWt2NB2BigGTYPu9SYnqEZcBQiVY",
  "key34": "5X1BWmMLioatnz2rHzV7sEFXWjmSx1j2agqBbFJGsN6aseP5vp8VYHPc5BvHkWiGYTBuMWfnDJSBApSZs28kkh2Y",
  "key35": "34XitfgUSoPtuEq1pGz1MXsBhxC4XdGmj2NF25oBzkbsCZc93wEKSDBWEvbGC5Jv4kcg7WyFNzt42JEmAFqssgSY",
  "key36": "5p2BDGmMcbbuVn3qZFQZHrnXKGRwsMuStKWaaX61q6FRVXbZAvRSi1KPjQWc4rzmaxGC53t9jpcSJ9NXHC5PrVNM",
  "key37": "66QgsbbMop7prfmgG136sW8ubaXM2WoLCRg9Sv9ujpBbMDV94DiXehPTdCxHDEGFqK99tgtFqsJChnH8nuYxa4Xg",
  "key38": "4TepS1SXtkhK9Z3ZUiS3SXs9CEzpgPLsg1opmJfTAa8yLfwDUebuZheeTJr8AaqnT45VcYKY8hCsMuz66CDhqCVm",
  "key39": "3aEbkaAxnGtmuMKSZaSiT77voDf5GmCVwDzssYXAeXv4ybKvcBVhP5tsgKBYkC46gPkAD4m3ATtbo81obnt6og4c",
  "key40": "5eMLFe8UFZFrP9Psi4nPg6uqGMxMEgMBGequyzJtdMtTjytp8r5fptb4yqnxhYhCfQARamGxozgMNvkBfwCy6v6F",
  "key41": "5hHC9Drb1cy5ErBjrLrpuwKs7YPH5QJhLiRFhfRC2KebiKR9stQXNB2DFkrHDkmrpYZnhXqhuwnJdSKqayveaTRB",
  "key42": "4drzjo2TMxDjbhH2uDSrk7EUnxKGynsF44HDeL2z5jZaRcELJWSSrQzEELKey2Aa4Wrr5CqZdSUvNyEJ7bNRWm8s",
  "key43": "5yUugvEhwfju8v1TAoxHr2PCK1eVS8WCDdWdxyW9vDhUoTYQF5xhrPCUTtAsF1HS5UNKVyw44HVZ59iwQkqmdCYR"
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
