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
    "3wFkx3uKYuT24wRpxM4iHWiEL6PSRwSfhKTM5Hv85EGUysQbBrxjRWJ2xZjNLZgM3hL2yzstJu6U18KWdrKH12Qq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25fGsgtnGichMdbP38BLahbCUiK8Zdfy8idK8TQgWVbQuMVTiZSA6sTZ4pjNKgudTJjPftS77CVEWAtGid8V6T5k",
  "key1": "4QoWDKhBNYBsqJX9Uz1iJjEd7LguJ24ah75sY8mWNDijtTbYbgaL9N87v1WcNTq1uDncSUnQTnwKzBKyQhViYsHN",
  "key2": "2V7DBUdjgvAUHmdrbVGue8pBxv4uwe5qEveA3wW3Yy5VFvGBcgHGs5ZMq8Pvc4j9isMxMYx13MQwpU1qiD8KEkY4",
  "key3": "2cHceTDTm1fsNPh6LwrMQ83mcHKZgcueUkPNUYbvAprxQamg6WdJW3zuiyeBpajTRzEBXUWFsG3Le3zXfampFqFq",
  "key4": "3xdyYqZNcxw75Z61y68rL1FknkwqcV46dbZEUnmYfKkaUcWh2RMLboFwFCusm9Bcv1GcuSzGD8xoRuXESdu75Wze",
  "key5": "3yX7iwiaV5zcZ1dBtH7rQ1qkkrQpB41dUzshRZPrBZajCzEXZNcHsfkoBjTiE8SnJ9p8oWngHgi5qPYJhfsfCyc8",
  "key6": "58YbeqZ31N65koQxJSfL4tiB74pzEaFfXZV7XFc3jfAGCvhAUUhdy9k4tVCpBEmAvQqNv1sZ1KZbxcrLVGEJ3jjH",
  "key7": "3UnfkYe8RwLE3MbDCPK8aXhvND9jsa6GQprpdY61ByDYddnFxY82d72tU9YLfxDijvMUoVwXF6XNuAsstM81Fx5A",
  "key8": "NHT1XYjpbkDm52Pn6CkddvuPB7iojud7Co92oQD88Y8nDHZ7bBdcC8DRFH1EFp9rjvqP9MwdjkxYQQfFQjeHfaZ",
  "key9": "27doAXuiMWM1DF4gDAFGEgqCbqbQhmqyMjLRDRvCu9ADaKScWdtxFrYX8BKMZJD63jNWDVcrmPWLBtBUPVucUsdf",
  "key10": "4yFR6tNiJHUreDXJVTtCV6tX2afRM3ExQCiEwgDrXvHtjCdsUTfZY88oxwYfRNwRgfX16LUgk8uy29UVokZQEPKr",
  "key11": "4adMCLCrLzuAt9DysfWxnovzJ4sRsydRS1PXHZCfLiZGH1zFZVqP2tcUJPVm5gaaP5VnNkiBH4eWUwmKnjGdWuq4",
  "key12": "RMxx4UNwsA4gQ77CodjwfZrJV9wbf14x2BNKLq5ExXJtdX8naZPzzVr7cXVCrKprt9jMcJhpvtneG87PkudTqS5",
  "key13": "2G3ZBLsyfeTas1p432insJc4Ui4x6QxNe9gWgaAT9wRd9BSSqNYMRP26JA1w3vCgM7gvb3EttgNYiDhfqSp3rQgf",
  "key14": "4AfyxMhq7ejEek3sCFJqdHJdcpKxpFJdg9nsNtZ6zwwS52DMWZhxP9D5P6FPEAGr8nduAj6car752AycB3vAwFEL",
  "key15": "4meFMQN22x86N9ST5Frge63puRq8JLCCccFcJgL2wHciFU8jjstvvDjNfGC5uFz912DM8Fw8TFoyvLv6q83m9NCk",
  "key16": "2KjKZ8BZgFXJNLKmBF3tqxpkavR65zzVeXVLBcyHzm5iEN4VuFSqxZzjc1jGpdamdqZpoJScKEWqWnaRBXYZWDHC",
  "key17": "25HHxqnDckvpYdPJA3YKUTaAn8pmTsBph4Hy7b1VQ5cLpj44QL9VQPQecje1xU8y8VKwfxYjeBZr5sKnCTR3vV5x",
  "key18": "svBF2SeRzMsqGHEMjztwKcZ1gh7jm8k5pMJb7nuxL4CTcuxqPEgdX7VwjVvJAeVDMjXPXFv1eZ55eTdiF2w84jk",
  "key19": "NqNqtbB34UezYVXavDdvEfrQqAvaZE14TZmtTfAsF3SJJiqCVAknFEDEQ2KEmf2hRDGAoiNAmUJ8zGsZWGQSm8J",
  "key20": "5vdTdXtVTidzhd9yAgh7ScMQBz6QkSNCRozWqsu7BxX2bdMAr4XZ3hynJX3uNwuk27WiQDprH54htUWXQNmJwpZV",
  "key21": "4GF4XwN7gqFXBDDnDfE5eemVhNMtGVWxFSBpomJRDJ8nnqw37391nzVuhFqWsWAMtBohi8PtMHK7uZZRBxxkTRQx",
  "key22": "455zXg9kFnZMoqCJtbsdQQ2UtPDdUsoTfmBtRSDp5VNEG4Wt6D9kEwxYKRhFGRGyg6L9oTycLPw1hf7usX1iqXDk",
  "key23": "3fpHZEuja2AVYa2i31a2uWqmhV8qfhjyg7VQjQPkSzmb4FLdf6ARq8mrb67PpwpENRPAi9W1feWYcjtfPy65xcNN",
  "key24": "2wXUU66284D6VyDZ6GmoNsiR9cznMaWREXSEdqR4aBweBA7tWz3MnYrdTqNo7vmYXcBmmrkL1EYo8bvcyvGgRQSo",
  "key25": "3AoRAoggAYcy2VQ34L9KnX8gmBDkoSX7nAwvWiFb6HP84ZfQrtrPyC5jZ2mzt14ufSkRDNXjHtdpY8XSfAyty9HE",
  "key26": "5Py7gWcKiK5EovdiTU2XBqBE5CFGeLCUAF8C8KJ7ADyRQiUb9z4qw3QaAHpZdgaj1akKR8acty7nuEC1RA6RDdAJ",
  "key27": "2UcpK65aLy6W4LwaZuLPd2a7zajvM1d2UkB8zCJUAgSkLCzMdrqhhVKxQt5XF2yEaaByU9nHN4ToQwbHchvytD4C",
  "key28": "5ufNRMUsMo5PbMHP3XRFbPfVpc3kAoSJZGVfocG4CuNdhrtNGcT9z19A57EEZCkgyVALvv79R63Ujgi5MzDFg14W",
  "key29": "4oKUbzrYXs1sxEGkgqCY6XbK9ikw2QowrwGsTvYxmZxLMWto9NTiUUG8FDjaUDHMaunHkVqxBaieEdnztCBGBUtF",
  "key30": "5KavpTF3cJSvgvZUPZtMgVsWAUu4U9bed8ARKWcyNXNxn27qXfULojcsT3G2vTD2NMF5iMZE46LrcckGWaNrzs1e",
  "key31": "iQPBqxZv1rMsGrL8c4Pm3NvKuTRyukeELuLMiY6F9cYHiVaB1gMTvz8thuAmYokvZ2N9eGoqPwJ9bjFukSHRhYB"
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
