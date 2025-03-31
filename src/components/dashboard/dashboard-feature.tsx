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
    "4gEvW6Yh4yQLh1n2KFe8twKX6Die73EzMwZEcUUF3jqfpYKDjEVM2EKJBzb5o3dSAetpBEYpywfqx3J9M7idrHMn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RzS9XPwedQXQ95rsEb9cV5HBtgp3tJ1AzdDJEuLAjs7tEitKAhqJ4rSGCBcqFqrQnPSKPJGme7TxkvGMYfTgfiT",
  "key1": "RsRWqkejmQC2wSDep6e9QLWBFaM4k4vgvDKZPZHkyfQgucFaAmpc2swj54L1Yvt3mzKB3jHgNSCtDXvw8M9HEdm",
  "key2": "2RrmToHzQR2P7ERN9Fq5k4p9YFHQAs4QxyG58n2uS3vJ1Aao3HtHVsRF4D29HY8mTQxcutbx5VjvohQpmvDFcsX4",
  "key3": "5EPt3AiQ8PiGgTAyGo6ycib8YxmsAieeVpr2SLcnzZHtS8D31wckAN5mzZ7CvUZpjh8Ehtq711GmBJNQhmS6pb2g",
  "key4": "62bvAAGmGsQQcJFdvGRbNFP88TN8Tj6CojHAyzRtrx9D1B6pQNWncJVDwnxpY7tcLTxbTCA2rx2eGQtkKyeCRx7h",
  "key5": "33v36r7nuwTxZLrQYNzrA9qj3v1ZunfBqLyhXsY3SU7BtAwy5PuJLhPhU23ddKhdQ7wk8erXuYngJxY7mip1X4qo",
  "key6": "36ztXa7YjMt6YNvnn4TTHrM4AynKTFB9YWXN5MteReKdjpfzFzU5C9P25Bk6HFVLqFZS9xRnZrH88eSdXSKMZYNj",
  "key7": "3fLubPv1srubXUBn4D5cebYaiHTFbBg8G7vqVqvyAKreB16gQAT1KXhNqMDy59DbLAwer8Gxwgfc7TjSez6G8WPB",
  "key8": "22fxG7GfGAPf4s3fg3YZs711aRjx7ABuApcLg4yNq161kTtFGmeeLAQGsXmx8Ud539LdJeS6xNxJTXydSHsJaeLm",
  "key9": "3DSrYBoqpSEyp7M6CEoBxhPs9LkVk6ixt8mrtdUSK7Tzo29FELp5sfZcShyh7uMNuEsYRuDWLjoyjin7QUneZXAR",
  "key10": "3QoQ1ZFF5iSurY4SyGNnBLRN39wTiZMgpvKbRbxsntkmZvthbj1N29gFSqWcqH2R8RbwCoXhChcwRFycu7SNnCo2",
  "key11": "53Xy3p9VbdEqF1G4MMJA9ze7hwu5iydyZUXeAU5KKRkqukvbnPkNET56ZJTNpDiJj1VLuHwJKawLf4XMCAaX1X7j",
  "key12": "2ankbzinMkM5ijdGDwArMYBYegEoA5KjwwGx8uw1ksCLNNB8k1kSFhMYqpfkt6wYUvneQzfsa54weihPoBd7mTLR",
  "key13": "KfwJKxXE3QkCufaW2wqCikxokRt8GUJMhguwESBKn4QPA81iBdFVN5mCqhBvBUvNkqKWDP7kxYaYrcwXe7rafSg",
  "key14": "4YQuQJ1vtoSs1NemfmLtKoWozkmA7YkXA4PGBaDTqG1tyjjApUEjkiuQQTx5MXedLDeCZkqcm4Hb4Z8bdMXk8JuM",
  "key15": "2z5EjJyqX6V4i5rccsvCEE5gQ1REdLkwduDFimkyLRkqWicPQEwPDgpZnWUVPpsheewysrGzSC3S9ecmrz3DMJ6n",
  "key16": "oSsj46BURddeZGkrwNU8uijjaxSVAUguR9munLMTF2CpJP8RysUQCoZC4k7iCrQtFYuxKofcNik334u2PH3UxDz",
  "key17": "cxZyvtyZn1WgEEtexznr3vh8FJSWcKuCLHyrS9EVjs4te4yVTNELZdCmgByMLjD5y9xC4DL7AoRxCkhFA9Zbsue",
  "key18": "27EUmPgNW9VLhHegmff9MCLmVydP46ZB9Z5rStNBqSxGuLKhFKbANxJeq77dJBK525AM13rg6XR3FJXssN3Xwz5S",
  "key19": "5FgpRp9ygMTTDW4iNc6f7SetCZvsq76NCLgoC6W5dwfdExVLTXuBoo1jJtoG62jr9j6cLxWaFmeRT43Von1bAQ99",
  "key20": "6Fw8KdKjobLXLNmCNpYjSjKWrHLYYvpvmKdY5Diz1xmm8CPrPu2XiMR3H5JgBVNErrPC6WFozTq43BfKLTKpDsz",
  "key21": "eYHUgX8au4dJiRT73DF5VFV2jBCHgks2UWiVpCbfByX1vrm9QkxUDjXUKdJ4xUMoRqAq7WfZuub4FS4Fn1mid9T",
  "key22": "63ViYCCjAiUxAkfRXJS6zWmxiTZufBJicakCkKUmGVUjCrQbzJkWHTJXJCrfs7gZFVQNn5TpzVSar4MEJtWwtmCt",
  "key23": "2vBsKiuvL3ZbZYepcuQF6QVXwPEv6S1tPRMTKghjoaCUVPkcuhxx25hraHpH7HFv3UWSKkRqq9WCybn3JFFGbBhr",
  "key24": "376WouqYZjPWcZNRWtfnVQWCcocuVdDqA2boj6DHKKya3zJpwhwU5LoeyxqD8PX8uzgJDLzGHq2Grmwwe8d3iz6p",
  "key25": "46TYmGbCN8jykeQ4cGPeK9S1Zxe5gcVEvitrPVW2Ea5rpP1pdAzqqjL9h2nMvF7zu2uTaME9g8sAicTcCwHASrup",
  "key26": "3p23w1ytCgzrKUE8hzKr5qi5kW1SYQ4EgV99auFfiEdZEkqrxQM9YhK8fGBSHtgdvU59WYAWV4FTxCaExznG4w6n",
  "key27": "4WoATicK8QMKBD7eJX9F2xwEjeBccCzrLy7vRhRDkWAs9akQPPtJr7i1rtVXyzycXzebRWwkBFQjZZq38sV6KMZ1",
  "key28": "G26EqHrLMH2GMBnSj3Be3g62r9DJnGhEdg5udvaL2BpgzPXFdm39ay7vSLnx89KdXx8rJJa3nK2husPKgRTgmRd",
  "key29": "66h119nBemzu53Y8wpJ96j6QEW1i5NLvu7tGwLLhgAiiArE9PcZhNDL4tjL9o5c8wueYJFHunEx1Dbx6cJRrbeyE",
  "key30": "3b3dgZv85s9yFK3JDMs6etbz4NyZohTiv7FW8vcnZGMUX2he9pjhAKUrb9z9yAUKaNcddt46Mj6yZmvF9UniTgZp",
  "key31": "4fJp1pJBYqx19F3KVTWp3Jd7uoiJE2GQvP4VayUJzCgy1py3xDKk2KJBsWmyJF7kZHVA12iv1m7VqMjQJKGcSMKY",
  "key32": "81keaGqE4S8qo37z4FiUisrk9vkbqBVJLKYjtj749SofMhVNF8nuw5Tzg3TiMrns6xVNVTiwTEcVT4xedoAHjnk",
  "key33": "KAG2KZtyVkWL4fetJU9dsoxjpgPpLYCs4fZktfr2QiJqvCGaDAUCXSwNAqFQvLdq8zBU5HPZZhZcBH9hkkTQGE6",
  "key34": "65JgqcJux7wv1QG19iVrZ4X58VLh7Wmsi8gYXDXmfuvoCA4WTyZywMty2MimRvFEWkJTcHVACVskEv8QEbYk7pff",
  "key35": "hezthNYaervBcwyKyJGmerGm6bi7noG3goFNP9SLnXcnAjd8wmhW6hrr7Nvxg3mKgxP7bkZ7RkoJYAWhWMPpv6F",
  "key36": "5FdfkjQ9JYHRnBLifgs58WWyuxC5siS9W6b63sgfxELSqrhwjUn15cJgCkMfEy5b9pxFpjjVcph3tNwp69qHjfQd",
  "key37": "3gpNs6XvM1XjNAdBBaFQY28UZH3fuynFZsChhh94EPnWB5kyFtShn3ATQLmZzZnu6tVv9nKNbxuXsbkD7bLxBphA",
  "key38": "5GzQea9tWs6UbhVXsmacoKiMkaxjG2mhcn1Mo6BV7VYahFaVy2DZQb5tayBSWxAs11uc1WDSrSoboYrszjiR5Lf1",
  "key39": "4nHwYKaXyuaSKpSCAvgocVCVGJJqn1ypB2qQ9197o3FPFQw8LEEMYzyBFioMzWTJgT9y4NqDGmTofxeytNZy9q4N",
  "key40": "2GuHdFCrxLZyWwo3VgciKGdziKx3r3BqPHUkbFWjmhaxYTGEpQ3ZJRvpRawzw4D6MxWELBfaBnDRTzysRCsyfHdp",
  "key41": "3Gqq9hq2LorbC4ZsKnq3yuCpun5a8Q6LiPqqzftz4qFb9XAkyJuR1pLfYzx2iSoMXJwyZYhbmHRyoNWNTtswryr8",
  "key42": "2jnYYDbsaU8stfoSdkrRpoUx9jWe1N92Tv1piFCvkPawgBhyqMrzmvMuP2nyzvmLYAVx7dpYAd7rEpcp7SQzrJA4",
  "key43": "2j3G71YnmMdPYXdKzp7gJoMrvK6iXutHbnr4D8JgEvpmpHMC7mD54TwfoKwMRChqyosXVESYPw1qoCdDenBYR1jV",
  "key44": "SgSEszhegpz3a9Hgc63V8nDCTATwkR5w2w6SAVDoqwok8gNqS3QmnnyMF8PoFWgRaYuoGWY31c1VscAjqYYznmS",
  "key45": "5oAiRQmTuji7dasrG5aqudvU9Q2H53CeReUTjtdCc7hHnyZLfsXrUaxTTADk5cBKYcccQqVDBE11A6X78hvyZgYc",
  "key46": "N6QbVj5i2UzMLsFd3YWPGut2huFaj8moyroxnpKZ1dXZsrwkmAQUrw6xJcgVb5eULZ2kbyg49N7CF3BeFsumgWR",
  "key47": "iTyH7BWdsnrL2R7uf4f6hvjiX9JA9WqmCiXoKUD7NCLjyx6yRpkTxMxXnQTHvXB7CGUSKraF8MB8qbaPGUePFkm",
  "key48": "3tiLadbrCBfCaPpX14PSP7MbEUfFTbyKRYdJd51VP8tjBvTSDNfvxhVJgqFmoeb94wixjf4GZar1bP1hMxaezgQN"
};
// KEYS_END


// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "2aAg4HFiYwjFqa3s9dD9NkMGuoQR4xqucaGHt3GXygyQerzQyqzhdVimUfLadTpyG4dBrXw5dbKJzMdmagrpNeCZ",
  "decoyKey1": "2qGYYggnqP7xuvpSjheeH7d8xnqA6chDZtJ3Wut8y82Q9Sda7aVnFjbVoWMqK2bJWSHX5mK1uS6P3LU2zKmnyjx6",
  "decoyKey2": "FSiZdDYUhMio4SE29pkwvGXswwnp1pr8vuVZNyQm3QqCNiyTFsaWT4qTUaPnxvHUwaD2h8CC8GetwTdG1VPSthc",
  "decoyKey3": "xE6pcTuBSR2pxrXiNQLKZkAZs68BHV5mjuphbgmqTe9bwxGiSV8SHBeRZ4Zp1ZNkZmA4WHfzX22hWbLwesnhL7n",
  "decoyKey4": "5VgukLU3zcHC2AYnp9yQiWx3cMp4hApu1pzJkUa79mpPYP1cQAbB4g7zxwi9jeZLLskmXSF61wWFYKPVs5EnuYSB",
  "decoyKey5": "4UMcboXyebWhQBDiXAtmSFi3ZTbMRmvxxLTrdVzxrAxxBsRoREntXjc4j3pSGgiqJEnUgPaCR6RvxEtimXYEgsj1",
  "decoyKey6": "3Ca5yChXK92kAr7E26Fsr4QLccdYJsGk5jbtKw5ZH7zEwogZADjnZ2brVgvCVfLQhTqeMHXTRD4Tqgqv4u9WvyKn",
  "decoyKey7": "4ypDUkcGFK8tqQ9DQTNwgaAHuLYS9wg69MzoNstDmwwmWGPj92doPSo4rQfRE5xC1JLfFmDHCYyENd24PTSAvhrn",
  "decoyKey8": "2pPwTcZDYe13QcX6YXCXh8VSKjxfQokZfa1GHz29QkUDbENUHeZanKjRJMPTYe9LuAW3eVJBCZ2KwPBHrH82gU4U",
  "decoyKey9": "iCEw5tsMKvyTpyppa7UuuMhX6EqjuKruQPp1JRfz3YHDz9qeZQFhAgkBXK5bTDoqKEU7c4xDY22RxnXHbrepJSa",
  "decoyKey10": "3kpzD6xejjqnAVjm8qTDaHa94WfWgeRmk2RTkMxcq51Z3DSfjw4U21KNTkNcjUjcnkyVqcC6rRyjbDbnjiUAQ4xE",
  "decoyKey11": "3GMNPhdcLtBaCY4V32dqcojEZKoJpmtnMP1afbKV2ZgU865aea4ZMmG4UyBhkHKpBnsQLPuVKUjjPtCtuDJ2A5wT",
  "decoyKey12": "3YuGvieH3XPjHxqhCgvNDcV7poLMp9Le5cLRo68bh59hHopDHfyMPV4YVahswPMofP8itQvaMTz6kNhS8Z8rhtfT",
  "decoyKey13": "2B4QRsx47HiQANtsqqsP76SgBFQtaK6GyMvsN7XofKfgcU4voP9GxtKEpsSqGBdRXC1RVEAPTUMigscgQzSHXk84",
  "decoyKey14": "3we7v2cdZiZNiyQnUCSEfPQ4ptsvg8oP6yrQyzxpf6W8sXwJ4psWA91NYWmWY8qATxHHAATEisJRwnicxwtPTtJg",
  "decoyKey15": "3n37j2bHPCiazD7Kk9AcAHJfnefArvMgTFAAwQywRC9KTE2kXnpy2SzWc8hwFfgcvzqSoEb5s7uczk8U9aG8eEoZ",
  "decoyKey16": "5fjzCnf2LmWLGFBbsMeSYgHU1zhthxBzsSNGw7h2b7hkK3TUsTEWgFjUq3miYB3Rxf61msnF7a5pDrARf4DBcqyH",
  "decoyKey17": "4tzTHRoXdyUsfMEnV6vuaq96EGXtkoQtFXJRMc5Q5XhjNkWehWA34fBRxhvZCCLHJaicdotLT6nrK9UFJB928VJ5",
  "decoyKey18": "2puaPP89ddZUcvcMLryucaAHTsyQ53pcfPxZEF3WVBkR8F3qmmojSEtPWoeTMvy9nz864UNBDhsPL5Md43FXGytV",
  "decoyKey19": "5sBZn53SDE8chBNUvn9r1Wm7rankUt4mKQ1iwvqfxykFm9Crye8VoE42m2pSaSEvLwWRTRQEbVaePj93uExY11iu",
  "decoyKey20": "2wPAjpwVJ4kofyPCAn9d6TsLindWzkmsQ6XX4rsPebjmhSeg1wpqLQqAVGcdtqBpGja6iNwoxEus3SSADiCXeoBy",
  "decoyKey21": "2vrexyFkMn2Df8z4HZBNZjXB1XnCLkDeTEKA5CE7f18gZfGqR2JPsLyatkM8zj9n4Y2NJoGX5wFaMyVhVopTXzsU",
  "decoyKey22": "2e7SoP8bFMdi4PgbuedJxr8s76mUz9XPi2KH72oCkYJWMndADmepjSt3hisPJexpBzKQ6JvFyxhZm5k3u1bs6FEx",
  "decoyKey23": "5ZjttGDPVmiva9GoDdpUQSE7Fvri2N82yEJh6vbhwT32aJb1YSEhcJWXBjJR4qEh1qp4kGw9Wofro94TduUVtHfo",
  "decoyKey24": "2XL6GV5ztmKSzBkhfQE8fZ2ukrMteaQXDP2ZjP1mbjDad6sTuC7vsGBsMhwKZArvUmUvLicHbQa5GrXCSgWxLYWg",
  "decoyKey25": "2ShAihv9aZhcgv9ikcckyhZzCHkKhgXmxLyvZbzQmJkVZWayVfPZw1KHP9jpoSL6o8acDDT2yyatbii7PTjTyszZ",
  "decoyKey26": "5C3vfNTkfgQzzbySJcif8UsvhsDRVNhKUFZEv7YwpK7MPeHnQf96xjnqECY57DqbvGaEBW7ea2z9TTZVZQGJD7nw",
  "decoyKey27": "2UyZocKhQ7ubhqCh7dmUtNeHXrDbSHupKX9Pn14uJbuemywzQB7uQ7xAQPwPJLYvnivg4sprYJ9EPmTTdcA8sdcw",
  "decoyKey28": "MVTWFrAifuhPueHLZvD6u5LunWjb7BXZ991qA3juYY4cteLsT2jY2ZBLVx8ACVwz3TnsvpYEkuuSRdbBwnNX2AW",
  "decoyKey29": "3oqyWPdqZwsT4MURSpGsvijsMz66Uzo15tEN4LyhM29a7txXkDVQQKdrkQ7VsJvaN2k44oCogmkLttkSxdNPg3o9",
  "decoyKey30": "4EQebb7cSRZ87Z8U1cSzRfTyfNMbTvz7A3Et7oSWZfhuHJfcnWt4GLoNzHZ74WJnh1PGuoYvvGeNk79Qm1vV2W9V",
  "decoyKey31": "5Efdga37hmvBLNzqM8GsnHDds6ogqmsvjnX2hfo3x8S7tzhWQNv9uHFfnSmiFroHBSaX7Eh1KCwmLnDvvsXhztca",
  "decoyKey32": "5sK8aTiVowqzsnbmMuZpT9CvDwAqHDANDUjL8saY3nnn4TyUqboj9KB7wCgoxwGT1RKaycuprs5HeK8YnvntafW",
  "decoyKey33": "4xqjiABeDTGbvUmrG6kWev1K2MsRfQC6whP6JKpFoD6xqsm2JHwaXi1asACJmP4RVUYrKcHtqmcJDxQwcwibFhJc",
  "decoyKey34": "r7xKV3KJ1c2NmieKehjAx5zGGEKVcn1LbiDV6SXT83NvMgNhzDbUyNrFmfKjjE56bHzE2nDPHMaMA99Wpv9UF1g",
  "decoyKey35": "4YVoqxpSPLtVvsJ3qRZxsDtVjpqqGbBf8GH9WCY2SBA5PLVWuh8oQVuXcJnT5a1j41kkrTLHZppJ1X15gwuq5KDq",
  "decoyKey36": "36WrmS9qsWfzvBXeYNSe7rqp2NfuaAQdsHVcsT4LxKGGLy7NdNpw3E86szUCuAoke9EyBer5dL3AZUw9XZbsGpd7",
  "decoyKey37": "4UQwrV5eEkc7DdGwbPsVD5xFZLiubFGEBbw9bWbimpEBzD5ac6obr37ej31TVXGyGshU9dukvZEtzxsHG1mp8Fkf",
  "decoyKey38": "3A97g2TPJe8R5b19QPqsE331n1tCABriCiYkCMDZ2ZqjCpeGXXrsxgxBQprzcM6NgTaYk3AsKmT7KgZHcKruYbEZ",
  "decoyKey39": "5bDptNBL46yioWMgz4iBfiVyoULu2v8BPUvE6pG2pQ2iY8x4CXnutHbKamhqgJJGmqufJiENuwn45CXK5X6EhqBZ"
};
// DECOY_KEYS_END
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