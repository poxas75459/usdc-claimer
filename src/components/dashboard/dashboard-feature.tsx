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
    "4v4frvxqzt8uq6bwCPTjHVfS6eghYrvKwmjuZe6bZsSSJkiHzKmdaC1qKTT5KzygxLUSYpiANZHqZ3ecphRttQJZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Vq8tDQ5xkFUTzjDokTHYsCZgaeS4SsjYhRXLztTpSpezQMCR7eXGZsUhwugQxJUF4Wb5tnmNmdy18i41sFkP3j7",
  "key1": "2QKY2gMjBGUtkt1eyNqJiQTDhJmGGqo7xvJHwfxiW3FRgeHpQR5gMDuetd8xGm3BQHDgMKAqZ1pn3DP5WzdvE34r",
  "key2": "2J4q1tFoTjJfcKmpu3XZrFP83fc2JrTzVT5ZbNosfveEmKVV8mRRTGx1nMXALBjNcCRuXy1gDTa7nEwbiDhd5JwL",
  "key3": "4uJiLiKTtuJGAgqcvR5Z3kg6sd88RK2cTNiJd3uuf9hcSisYrhbu3KFQSpJRgtkGyWZ9PJQzqToLfBfr78zsciom",
  "key4": "DJiiZPjkxUH5ARXBnMAPcTyedwrv91gkXpSEJp4sN4wmraZoQwoCqZK3FjxAPWzuJMV1xgqZpCPQ6DgJ5aG15du",
  "key5": "5Mx2BaYje2wgNiRWi8qJmj5qtuUxyGHDovACRCAMy6Mg3QroKBaW5vZ9hySg68fQnuJHwQuVZhLkaVZXhzz3H7Wi",
  "key6": "4cBgqb5qRF6L5PdH6W5tfBxzrc6s79jE7BEVzwmScPJQeWKHytyFR1gC8NKYpeTddYZ2wQFZWJWJArUUzrorRsSp",
  "key7": "3yfcykEnarzheYs3xsmfV76v1qhXfx6JoZ798U225jphQj9XpCuioGY8yrWfN95VRbLFJBKBGgX1p2FXrWajd4oj",
  "key8": "5cSqExr8xvTE5KRt35ZjcJrRte1ozG7tPSShBTJFV5s7p7VSKE4xPsRbvcexTNV1mQhHYiHqHvt3yzUn8bx17g1Z",
  "key9": "4mJq1wXQSiWp4EW5G7xiHzZgGWU8jGV6s3c1aSfsLhZJ835tT37CwfcNxHS8GQQFZRZ14TYJccJNKKRAUCpLabqT",
  "key10": "675zDQooP1NzrsjXrpGeF3vwUp1eN1hvx4sxXoLS7P2vQ3L93QzmW58Tka3yC3EywMKr931pu6Va8oADMcydhLnq",
  "key11": "WAgZLrgR5vGcfJLicCEuDKJLPsKCt4S2rJ2Qv2awjpnR31WTLqAcfW3KNxZQwxNKjCgTwUAAUNa31jTTJbaR5SB",
  "key12": "5msAbE7qRCnkpTnT8HUJWeh7KusZc3wG6rek8ykQ7SFS8KGxAuVjLuU4sy6B4hLbTz3c6wnod4uGJPEnPzo2WD6j",
  "key13": "kAoGZMKNAc7qKxjD6NXi96bHobx2Kv5Sb6jQfWZ6AehbwKQDPnw4jbSuCBVrKWYpdkraeri8vaiiqNtaHacSWSQ",
  "key14": "481rC6u25iMFoPY63Ys8apwu66kyeecQeA7CeKbiMnN36o48tLdydkWXPDECyudegYdPpF9oGWMDQYNrT4jZTByg",
  "key15": "pjErP3npVDztQg4PwQPN6T7Upo5NgKxjMLHkRTrLQsEUczdVzQLx1mKFgk7GjfFGHtjnfadvSRYRPyuLWzCG3Jm",
  "key16": "3a1Td2JwT5iN26RyMCd56xG5xJYfRwSDtF3ampCrw1RT6RFrwsR8cs25miHELTJB4NpBjSCXprZqTvPu4favfXKH",
  "key17": "2Me3bRZFRKHy7STzSSmob5bYth1w99k37srDHfjHHUk6b3jXP6B5Va5ufL8GfB7wFhrPWyfzv77ymVXCQRJFbH1k",
  "key18": "5HT3z2MFfdobFTbbVupdHWb8S9nFB7qppobSdZA6e3x4JvSF51hPfrv5H3MCc65nVvYfTg12JSEmYYeg1pKik5mv",
  "key19": "k5pQN6y8UkAP2rx7nWo1ibuvHp2v3fzBHeLUb1ZcA8izy4oPZpkagKoRw6MUrcNTzHscmjhv97tLbB4pML3VH1i",
  "key20": "4p9V5hNRLSWAVEhBJzjTc9hC2FkfAgk3NaCLcuzp9QinxGUrFnMqZCs4wPHxcupuHNsGXdxwmEJHLwpWs3NJzxH7",
  "key21": "HT8WT7fN2PoqCtpViZVzQBiD3Zikunc9PK17jviGWYyPEa7JYMgeV5JhQxuL3rjgEB4ce6GnBh6p6tzz2fKPcGw",
  "key22": "yMG8d8JmDdzBAiRq7gAQqbtoh3BWF8MhUbttPn6rsqQgxxtH5vj98KR9zzGE3YcM2jkZMQyR2qDCirLwQsNRRkH",
  "key23": "3iooexhkTicJ65BzGBVBNm2auBwjLmest3PkVcETScUZKtqsPwYqn6RWo2D84PDwoRGcGeNLzq5q8YndUuoyzdhJ",
  "key24": "5rq6QRhDscTXqvzHHfqaTsuu8EagYHgFTnDXqFc2oQGwiRAfVnTnRqrR8hThQPAcWgVFuc3igsVLGMpLkqy6p3Uy",
  "key25": "5zxyKfTwcqdueqYGXevucDUPuz7tUSzF3DBf9qo41kTTnqdoAEbBvLTZvqMeQd1qVoW9QKHVQssZjCgmFGD5emDP",
  "key26": "4hrsud3R1uo9AHqaEigZ14iEjWGpPAkdxtxrM9CoUd7bmW31fxruLvw9SoWJxtu6w2Y4wDxix7P4LAZuekrGRt5o",
  "key27": "55PvkKrFWvDu6WP8FdcuAoMoFjr5ocZ2HwAEGMxBo3MhR79FFjej4H2UtY8fYJtYT3BSbUz5oRE3br9FCp1b3rwG",
  "key28": "2miR4x5Rf2ZEHjvakB72cbJAoaAGErtYRYcrpeqW7pLYjZZ8emRiSnEkAsabaB3TBasGNaemEYndWtLinbb4aEyZ",
  "key29": "4HbNoSp87n37siVSXbdFkKc2XBegSJM36oeNJGUMj9vjpz8rqFCGG54A1VjwSxn4c9wqy6xTPHAadZxRGHp4pi6b",
  "key30": "678779YHQxfpHVmMwJT8MUkcdSe2uUGJEM7VbLgqeSMiiQGJDcMXu4nGgVM7mX4jt4sM1GDPuYpTTjmbofJzigra",
  "key31": "4wJdoB1ujELRay7KgrUM9AXvucmReM1k57bWQt3qGhtSTUycMM6Py44FjYPb1sx863NKqsUUAH7AyipGqeXzKMy7",
  "key32": "5vStTnzcadc8tHfdpPisCPNgetnzd1LdBRyxY6ygFzRTFNPCJoVpvYw75LTPSoAzr7RTzFeMTjvoA34YNMzJ2Sok",
  "key33": "ju1mDJqqAS1xxdLQy6bva24i3zMQHtS6kkkp1Hou3VZWdVBXbg2bYS5X7hVrv5tnUrjjmLnZwqnxYJTyvDd8QzP",
  "key34": "2HRx3nSkc6zqfWiWQ6rByebTXWm1T7o26tsHSRSvGY743ShV2vdKtu8ZpJNWDnzqKD1H4tZgBVwnWbQagutCcwFd",
  "key35": "3HyebqRMNrH2ARvWa4xsDUESW3z6qY8efukXUR2D8Eu9GsL42ACm4uyz1VMu4pALGsLtFz9V3BM5dPPLdp4xfB4F",
  "key36": "2rPdQmChnP9APKb2bV9iEtjjKH8bWxYtRARVTm5VaC38tMzETxtBYyvcfguTBwoeQMExqg5WUHC9nYDiKJHEiNYc",
  "key37": "3QeULUs66XruZCPanus917b6vfzp8f2uptpgoBefLErrWZejR9EJwpzug8AdPra6RTVbUicakJ8SqW18RmMdZUDa",
  "key38": "44ttTABmv3YXTrvq3Q8QDapCrTKWLEjJYMEDWrdqkyvKGCKREUUSQukf8Vvvp17Bqf6uGbnCCbYGZsQQFSEUqAgD",
  "key39": "wqmz4Agu9iUsiTP3fmApNtLH6JNztpxRvMVyUwV1EoNpdKRSzVAd4f16zE2KoX8fWFia246uqAUS37Bpi8nosWm",
  "key40": "2r2PSn6TuvGKp2ZBfg9mGaq441w16rxeCWsHtq7XPj4HTpvdKnYQq6ivVDS9KJ1hJdd7ftJ7WGg5rVKXb3AuSKkm",
  "key41": "2cboDJdnUdfNjrZqvReYozTdWR8GMAhQPjy488kiX8dAoXpsmLWnAUM5pxp7Fxnndydj8uDbsvDazLHrgSzvcMXz",
  "key42": "44fn8j65aU7C9yxGT832YsG4tBtimAHKNhjYMiAGsgD47s79aB5TXMb3ALaZppRDEDC34ycrzagox2yB77UY3h9Y",
  "key43": "65vPxFffYrwrKokG6B5vTMpfNwUC3K2xU2BGb1qHE8vTSEJtMQs5Jvdkpy1Qc5Re5rrN6wvWavMgjkZe91aTevgL",
  "key44": "4uUP7tfopq34hBNo4EoyL6gpcbFsMuHoHLNWcfoUSzeRsTzwCPMtnoNF4iGoTTDPse94TFE77GCCJnRTKgWi6QxV",
  "key45": "4cbh4H4mFm1rnNb36rQWrATtg8qV9uE6sgfBFneBapHfsN753WtXhLsjgyrRA3CEmSTAfYfuJcyR3ZtVr21EPeJH",
  "key46": "p9NpsMbeptaqLxC3Kc97PWTNim5uhjAVb3cTUY2ojx8J9aQSoy9qCEAB9Ys35eGE3rKoHu3UGLuA4LfrZuyo54K",
  "key47": "2ShmK1c5JbKnbheff8Jv8ecxD2kHHha3sGX5Yzp7Bd4uYstQDxU2ojaDchkFFLDcMpZP5Uto9LTns3VC8ExPeGSE",
  "key48": "2TVD1YPc577KP8Xe9JgdUdCt3c7cy6EZXqrho3XGAjvLBGWy7rjq47CNktZfaoc9m9WUcicVfFGx4SeLgANZtxVB",
  "key49": "5auGdNQxoQRdG9SPRfDMKFMUNNoULZccdRKZ5FXD47f9PxrU6P8FizXM2fa9TeZpChsVPQmYvR3gkSgr9JFktU6J"
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
