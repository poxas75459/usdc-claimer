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
    "3v46b79uRHD9RExAYdTHr3Hgne5fs79z1UN1mYK33wGPFcNrkj9bwTPLPCY6fpWDpreBmSFcqLSrCkTtGhiK2Lcc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DL3wuFLXwWZHumxRdWajUYuXSrffjYKzVdLvxJF186jshpdmvSm3H7THbn9n7jiwKXNdiKLXzPCZKyt5zV3LFFx",
  "key1": "5EApwBWDXMP13U7GY26G8D3uXMUuUk7FnLRSWoDoAkpD7kxYMcsbF6VM3ePeTkVLZUvTBdvr3KCgGdSQyngSMU4t",
  "key2": "5xhyNnrSSdBCPqhDyU4XbqBMqazWxgghXsUZVh73NQ9bjqJvXmkX6zDKRWvGnaEhzpcCGnyioxQLNbwJPaimv3dn",
  "key3": "27nxk41HkkbGkuU6TGU8eq6N52XcJjomjnQ9N653ehZwcye8TH3y3wYWV5Mmi9W1eUfAi8BYdUaAyj5C1to6Znph",
  "key4": "4HWRkPhSeiJX6T8Zo2GKFFhWmEkz6puic3mX5Q9ADFksLiFpjoRDq8HGnGTAjn34W1Uw1mwbgnKpBA7owo5pAesv",
  "key5": "4jACaWRXDpdmenyxigQUefV1WxPSS1jgsxvC6o7ChGhugwba4vCGHuGgxrPaRABnKPxT6WSZ1zjbRZr4YurP7sto",
  "key6": "5hNNnpCKDAs1jNZWUqkx7ANGdiJNCaHNGWyUCU2TJHCc6WGcctSnpy7jz7itUp9WnvKmFfLVw6iiSeyHuCiphAyd",
  "key7": "5rU6mUiTsyVnXgLJHgne4mU3X5QsbF1MR1yCRatuXt6j5NCtPVTqFNEgrwo9TpyMPtHdnrXpEvGTPGqgRzKVZQCr",
  "key8": "4NsfQdA131zSr3AHLjkXq1c9zZzL9coCZoAUysJrRZMcqrZ4b6QkF38TqgttBf18tJPUX2BuWfHi8zYPpbAmvSCt",
  "key9": "252tJxQrJrpwpteu1aDhBzZpK3G8yE4GEFxih4j11i9RWCQBU6T1qCkPdnUkvcxQDGk5vcBM8Et6anudGNug9hWq",
  "key10": "PoSm2nvuDCpyUG9wYxoW1GoYRL6pbpupU4GSvdWKiyz6UqfUHWxdTGiLwxnQbfKyNFNZMkc4EEVoH4XRGQTTBsy",
  "key11": "2Vf6Hb3PLE5HVK2xoBDNfUj4fWya3TZCiV3xweC2HkK7ScsBE6y3kuy3vWRgid2NvU82Q2vmKo3hhyG6THw7gjnh",
  "key12": "59NWzUUihS3TX8NnJdc1sCBL3qCfQM4o1xoNtaZrBDoBoEy2wew9q8Ehq13dAsfqey8VUv5m2ciJfKsjSbyX51B8",
  "key13": "b6CuqLieCVrs2wmbVKBzGM4kLvjaJPgD8VCs3MHSbTPDbR3fp2U7WQZiWfqMYDv2eWNX89nWoVKjBxkVwnybcHY",
  "key14": "64xeEqHi9fQ6QWA9EUbtNWT3bvj4JBuiQLX4czwVZkPjfe4kaRoBr6ZDTNh3iKJEPChX1Yy1bpJqBqjS3r1T6E52",
  "key15": "3aztJcXDBkeGtnj39KNrDuVCRX8JraoMb2EEihVkH52xAeeZmzyS4Cix8AdMACZZbhXQ5QTbQf59SSijfn7oemw1",
  "key16": "2iTpnxDhVccbjyQMdABvQ9CgBorzZvYTuP2JhRTpDkCjrajHXzUFsGXUyBj6BYBfAVpCUC3sLb3GrsTUpgNCA6Zw",
  "key17": "62HD7KjWp7tnhaybzTdcSRdQ1hJehxhfhCn6JpP4ZP6yJ1WyTN397pK1YdcLsiAnqj7UErWrQ3P9uF4BdyzyJnqa",
  "key18": "3jrGhieWGDEk7BrrEk8dGB4eWHBHHYsukkKa427sFCkHHpn8RWMEg4TkkcQ3JqomyQxfdsmzSeZsLQoRYLQd4HrN",
  "key19": "4yhF9D1ciVCVEFen4N4iA15HAG9ZFXR2KcYjGzqT9xt4vpKAyLDcuZHQ3dgtwgrafmyB7Ri7GBiLaPAEazd2nkRy",
  "key20": "2jZkNb9vsVa5xQJYBW48jNs5EQXzM1yi3UMcRwYBNqKwSr5WXp93vgXvfyCxsAubmvjN7JxnCfnjkksgkN6BoEuo",
  "key21": "43ZbRW1wV63ejQUqgM5kaWfMDT1ZkZKQLfHgxQntA2oje2EnuburVRuTdFtGnco7hta9aMu3SzagyAK8Y7UvxKDW",
  "key22": "5oW5CPk9vm2CTeEGowSRK6ymjPdssAXB27wRF9CWv89vvVCuunZvdaqAqXFqB7UVFHWnfn5G4g863CGHjtRmDRC3",
  "key23": "3j7Py2HwYYUdCJykkEb2iaUmqPzwCmY5m9ZFT8BJ6Qm1aLUciGjCSgwFNHDzaEeWeFTGm62jpA5PCPZFuufM78XA",
  "key24": "3jU3ZyKtedFbxKbMYveurDjG3g65rKvsBqxKeCS37NXKyjpnhsypB1SEJmniHNkE3ZHtQYHRJJABpFZK56WU9H8j",
  "key25": "RYwtsEGQm8Z18zHp8Ee7Gi2B2ytgAMEjSW3H7Sd6TuA7ETh4sANGZgC5WMmJaQkZw1VnTjXULtTrkJEVnpHF2XG",
  "key26": "3aruTLyhTq2NZNsxqKbJXpFm2A11ogs2iXnTuqEEm4vUyEHngEjvhTWsavJo22WHEbHvrGNhdBiEn8k31HowVZA9",
  "key27": "3ZMDAbniNzgvotAoC5VzArTYgQibq3THmUmynUAmQkYdFMLHqVynZCD2DB3xMVjC1qsvRDfiaMavJvie9g8Zb8VN",
  "key28": "SGXB2iUDUQkp9BFLw61SJq6tEqu4EwCUosVCiU8ht4JeSoDT4KbofJ7vtSA2yyizA4nsWPRWMmNU1mArf9AM6y4",
  "key29": "4SmTgqdbN5eg8MCwNGV74atmoXKMyabvR6uzh3ngMXVUPcqBPSNnd2vvpCbN1YDSFSyBHQqvYCzha1bC2K4Fw9AC",
  "key30": "3dHddex9DV1NtT6iXqgyawBWxqD8KaLeS9Pq1oPZ8XWHUcPWGESPky1eEqnCYKvi1j4jPxkamzGre7zT4DLoJKYv",
  "key31": "5xNC2e3ThvuGCy5zLibAdVCxpSjT3pMXsryq1ky3G4Gj82P2e9mmdEqmP15Qg6FUB4DmG2qics2ZbEd8S3LBBKLV",
  "key32": "4vsAwdFKNZAkywZyLWhJwnpQNLL3e5qusaBw8ZpgbDiys97w5BjnxCpBtXMFWtMkkP8yBmzKxacbDmYYJTuWiQUo",
  "key33": "3iFEZiPS9HejCLtPTiV47oMUrMLTKXykFZbsmgdZEGWpXXmZyGSMHTtwpjjzQjJhFKquhLYZvL3abq2QBJJYTNTF",
  "key34": "2LfSauLNBEYp3ETs5JFfvNF4ZB4BWG8nyb51wumgXsyyn3Xk9bWT3ZDNeQuoauascDWamv2XqLZ2wbu9LdVGJRuH",
  "key35": "4GGfN6gpaizyNHuAsPTBQDLR7p6RUcsvFVhN9d3RTCyjEceGrrGVKsypvuxKyycTTUN1RuRaLVpc3xjr2BxxMrN4",
  "key36": "RF8hva3DojhzsYGUVE7ePnVrC4J8rJhYVMBYMKpUjaEUTZBu3iorikdwEmxGgKqkXwpPmST6gaQqwQuTeRy3HTy",
  "key37": "52sje1RhDu9kCtHsNX4ewdgWhjFN9EuFNuj8465ptfoU8nuJD6BEoxkt19pz68X5pjRgPGpjvELgTsjXU86vabgT",
  "key38": "22hhSsXXdkYaEpyuEFYpB1He8RdNYG8w6m9kQnhvy8dpzwnd1D3izdJVyU3Z8p2RGocR67tiBZx2nJ8vLaKD8fPt",
  "key39": "3gwRKtMU9cHqVZb8waCjyjHoVbFdpNP3oaeCaxoBoqqDJFGc7jfqrVZ1xkzcGgepbJDE7AnL6FycXuNEeRGYnjDG",
  "key40": "55AtEXXLEExCT9tfKeWYDKCpv52cypcJsmBrqJEjpZVaEDXSr8gm39rQipPkGrdDSgDNQF7DbcUoUa5DnNaZPBZW",
  "key41": "33FpbME4yUurKvZWBzpEfhMaS2SPaSXpnAVRsrnejFTv5sDEtk76Wx75aCgZpLZN3CgcEqBUgLphMxXUFhAeLUyE",
  "key42": "48cjtGqrAeaduZmfzZJWwKdNRVY39UA6EkpqcbJxcaop9LNKPdg1wC3NTrpdgpoFDPbwaoHkr8VG1P8YTwUB7SiQ",
  "key43": "2yTWt19Zfm1UM4fpgWamGDYNTiYK5L1Ly2LZx1NdjUHefvf62jXRQhds9S1fpoYWX4aR5smSnm2tBGav8RSRJq4v",
  "key44": "hyUt7RbvJqSZ8L3iLmJRuKsGZAgsSYtpmuxnTuFZiK16ePKtBS5MCEqNAkvwbXUocXPfy7ST5CQj4FtE1q6SAMT",
  "key45": "4jnnvGmZuVSZhuPQdd3n6o7UH6QY6BL85V7hXytpgpRLNVs6HUxQNqaXNgSySyRUPm65skgW5N3nW7uKKT3DhcuL",
  "key46": "5AHR1BG9TcS8oGuRgekro2btn1QgfptSeFmhstJRusfiG68EpucWEp3pgvjJgp1RUydjJZPhdFSkRpn3BE2PmzQM",
  "key47": "cUqWnQXJy5JqueFG9qMHA85ARiK8T5Co4wuHWcGjUBNpjCRfE61NQwBJx3Xd9oevdjf2yL6q75BUcPKzKXaZRoL"
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
